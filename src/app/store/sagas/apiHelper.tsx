import { call, select } from 'redux-saga/effects';
// import { updateSessionAction, clearSessionAction } from '@store/actionTypes/sessionActionType';
// import { refreshTokenSaga } from './session';
import * as apiPort from 'app/services/api/port';

//Layers Fuel
export function* apiGetProducts() {
  const accessToken = yield select(state => state.session.accessToken);
  return yield call(apiPort.getProducts, accessToken);
}

export function* apiGetFuelQualityProducts() {
  const accessToken = yield select(state => state.session.accessToken);
  return yield call(apiPort.getFuelQualityProducts, accessToken);
}

export function* apiGetAvailFuelGroups() {
  const accessToken = yield select(state => state.session.accessToken);
  return yield call(apiPort.getAvailFuelGroups, accessToken);
}

export function* apiGetFuelQualityIndex() {
  const accessToken = yield select(state => state.session.accessToken);
  return yield call(apiPort.getFuelQualityIndex, accessToken);
}

/*
export function* apiCallProxy(...args) {
     const { isRefreshingToken, expiredAt, verified } = yield select(state => state.session);
   try {
    if (isRefreshingToken) {
      // Is refreshing token, try again later
      setTimeout(() => {
  return apiCallProxy(...args);
       }, 1000);
    }

    // Check should refresh token
    if (expiredAt && moment.unix(expiredAt).diff(moment(), 'days') < 5) {
      console.log('======Start getting token');
      try {
        // Calling refresh token
        console.log('Start refreshing token');
        yield refreshTokenSaga();
        // Try again the request
        console.log('Try again request');
        yield apiCallProxy(...args);
        return;
      } catch (errorRefreshToken) {
        // Cannot refresh token => Should Logout
        console.log('errorRefreshToken');
        console.log(errorRefreshToken);
        console.log('=======SHOULD LOGOUT HERE======');
        yield put(clearSessionAction());

        if (verified) {
          yield put(updateSessionAction({ errors: i18n.t('authentication.sessionExpress') }));
        }
        return;
      }
    }
    
  // Call api as normal
  return yield call(...args);
  } catch (error) {
    console.log('API CALL PROXY');
    console.log(error);
    console.log(error.response);
    // Error 401 => Should refresh token
    if (error && error.response && error.response.status && error.response.status === 401) {
      // console.log('======Start getting token');
      // try {
      //   // Calling refresh token
      //   console.log('Start refreshing token');
      //   yield refreshTokenSaga();
      //   // Try again the request
      //   console.log('Try again request');
      //   // @ts-ignore
      //   return yield apiCallProxy(...args);
      // } catch (errorRefreshToken) {
      //   yield put(updateSessionAction({ isRefreshingToken: false }));

      //   // Cannot refresh token => Should Logout
      //   console.log('errorRefreshToken');
      //   console.log(errorRefreshToken);
      console.log('=======SHOULD LOGOUT HERE======');
      yield put(clearSessionAction());

      if (verified) {
        yield put(updateSessionAction({ errors: i18n.t('authentication.sessionExpress') }));
      }
      return;
      // }
    }
    throw error;
  } 
}
*/
