import { LayerType } from 'app/constants/Type';
import { LayerState } from 'app/store/modules/layer';

// Redux
export const UPDATE_LAYER = 'UPDATE_LAYER';
export const updateLayerAction = (layer: LayerType) => ({
  type: UPDATE_LAYER,
  layer,
});

export const UPDATE_STATE_LAYER = 'UPDATE_STATE_LAYER';
export const updateStateLayerAction = (layerState: LayerState) => ({
  type: UPDATE_STATE_LAYER,
  layerState,
});

// Saga
export const GET_LATEST_LAYER = 'GET_LATEST_LAYER';
export const getLatestLayerAction = () => ({
  type: GET_LATEST_LAYER,
});
