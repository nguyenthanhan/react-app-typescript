import { put } from 'redux-saga/effects';
import { get } from 'lodash/fp';
import { updateLayerAction, updateStateLayerAction } from 'app/store/actionTypes/layerActionType';
import { LayerType, Index, FuelGroup } from 'app/constants/Type';
import {
  apiGetProducts,
  //   apiGetFuelQualityProducts,
  //   apiGetAvailFuelGroups,
  //   apiGetFuelQualityIndex,
  //   apiCallProxy,
} from './apiHelper';

export const parseFuelGroupFromRawData = (rawData: any): FuelGroup => {
  const id = get('id', rawData);
  const description = get('description', rawData);
  return {
    id,
    description,
  };
};

export const parseFuelQualityIndexRawData = (rawData: any): Index => {
  const unit = get('unit', rawData);
  const id = get('id', rawData);
  const description = get('description', rawData);
  return {
    unit,
    id,
    description,
  };
};

export function* fetchLatestLayerSaga() {
  try {
    let layer: LayerType = {} as LayerType;
    // Turn on loading indicator
    yield put(updateStateLayerAction({ loading: true }));

    // Fetch all ports data
    const pricingFuelGroup = yield apiGetProducts();
    if (pricingFuelGroup.data && pricingFuelGroup.status === 200) {
      const fuelGroup: FuelGroup[] = pricingFuelGroup.data.map((item: any) => parseFuelGroupFromRawData(item));
      layer.pricing = fuelGroup;
    }

    yield put(updateLayerAction(layer));
  } catch (error) {
  } finally {
    yield put(updateStateLayerAction({ loading: false }));
  }
}
