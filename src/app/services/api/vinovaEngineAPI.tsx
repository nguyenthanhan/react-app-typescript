import axios, { AxiosRequestConfig } from 'axios';
import { responseInterceptor, errorInterceptor, requestInterceptor } from './vinovaEngineInterceptor';
// import Config from 'react-native-config';
const Config = { API_BASE_VINOVA: '' };

const mainAxios = axios.create({
  baseURL: Config.API_BASE_VINOVA,
  // validateStatus: function (status) {
  //   return status >= 200 && status < 500;
  // },
});
mainAxios.defaults.baseURL = Config.API_BASE_VINOVA;
mainAxios.interceptors.response.use(responseInterceptor, errorInterceptor);
mainAxios.interceptors.request.use(requestInterceptor, errorInterceptor);
mainAxios.interceptors.request.use(
  async config => {
    config.headers.OS = 'android';
    config.headers.OSVersion = '10.0.0';
    config.headers.ClientVersion = '2.0.0';
    config.headers.Model = 'SM-Test';
    config.headers.UniqueDeviceID = 'f6f0c4f68e0d1111';
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
export enum AcceptType {
  json = 'application/json',
  formData = 'multipart/form-data',
  urlencode = 'application/x-www-form-urlencoded',
}

const defaultHeader = {
  Accept: AcceptType.json,
  'Content-Type': AcceptType.json,
};

const formHeader = {
  Accept: AcceptType.formData,
  'Content-Type': AcceptType.formData,
};

export class apiClient {
  config: AxiosRequestConfig;
  headers: any;

  constructor(token?: string) {
    const authHeader = token && token.length > 0 ? { Authorization: 'Bearer ' + token } : null;
    this.config = {};
    this.headers = {
      ...defaultHeader,
      ...authHeader,
    };
  }

  get = (url: string, body?: any, option?: any) => {
    option = option || {};
    const { headers, ...rest } = option;
    return mainAxios.get(url, {
      ...this.config,
      params: {
        ...body,
      },
      headers: {
        ...this.headers,
        ...headers,
      },
      ...rest,
    });
  };

  post = (url: string, body?: any, params?: any, option?: any) => {
    option = option || {};
    const { headers, ...rest } = option;
    return mainAxios.post(url, body, {
      ...this.config,
      headers: {
        ...this.headers,
        ...headers,
      },
      params: {
        ...params,
      },
      ...rest,
    });
  };

  postForm = (url: string, body?: any, option?: any) => {
    option = option || {};
    const { headers, ...rest } = option;
    return mainAxios.post(url, body, {
      ...this.config,
      headers: {
        ...this.headers,
        ...formHeader,
        ...headers,
      },
      ...rest,
    });
  };

  delete = (url: string, body?: any, option?: any) => {
    option = option || {};
    const { headers, ...rest } = option;
    return mainAxios.delete(url, {
      ...this.config,
      headers: {
        ...this.headers,
        ...headers,
      },
      data: {
        ...body,
      },
      ...rest,
    });
  };
}
