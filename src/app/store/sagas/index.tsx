import { all, takeLatest } from 'redux-saga/effects';
import { fetchLatestLayerSaga } from './layer';
import { GET_LATEST_LAYER } from 'app/store/actionTypes/layerActionType';

export default function* rootSaga() {
  yield all([takeLatest([GET_LATEST_LAYER], fetchLatestLayerSaga)]);
}
