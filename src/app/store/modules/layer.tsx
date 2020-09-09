import { AnyAction } from 'redux';
import { UPDATE_LAYER, UPDATE_STATE_LAYER } from 'app/store/actionTypes/layerActionType';
import { LayerType } from 'app/constants/Type';

export type LayerState = {
  layer?: LayerType;
  loading?: boolean;
  errors?: string;
};

const defaultState: LayerState = {
  layer: {} as LayerType,
  loading: false,
  errors: undefined,
};

export default function layerReducer(state = defaultState, action: AnyAction) {
  switch (action.type) {
    case UPDATE_LAYER: {
      return {
        ...state,
        layer: action.layer,
      };
    }
    case UPDATE_STATE_LAYER: {
      return {
        ...state,
        ...action.layerState,
      };
    }
    default:
      return state;
  }
}
