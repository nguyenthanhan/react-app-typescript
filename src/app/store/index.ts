import { Store, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'app/store/middleware';
import logger from 'redux-logger';
// import createSagaMiddleware from 'redux-saga';
import { RootState, rootReducer } from 'app/store/reducers';
import { LayerState } from './modules/layer';

export function configureStore(initialState?: RootState): Store<RootState> {
  let middleware = applyMiddleware(thunk, logger);

  if (process.env.NODE_ENV !== 'production') {
    middleware = composeWithDevTools(middleware);
  }

  const store = createStore(rootReducer as any, initialState as any, middleware) as Store<RootState>;

  if (module.hot) {
    module.hot.accept('app/store/reducers', () => {
      const nextReducer = require('app/store/reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import { persistStore, persistReducer } from 'redux-persist';
// import logger from 'redux-logger';
// import storage from 'redux-persist/lib/storage';
// import * as reducers from './modules';
// import rootSaga from './sagas';

// const persistConfig = {
//   key: 'root',
//   storage: storage,
//   blacklist: [],
// };

// const rootReducer = combineReducers(reducers);

// const sagaMiddleware = createSagaMiddleware();
// let middleware = [];

// middleware = [sagaMiddleware, logger];

// const store = createStore(persistReducer(persistConfig, rootReducer), applyMiddleware(...middleware));
// sagaMiddleware.run(rootSaga);

// export const persistor = persistStore(store);

export type ApplicationState = {
  layer: LayerState;
};

// export default store;
