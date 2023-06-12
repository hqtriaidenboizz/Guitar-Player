import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import rootReducer from './reducers/_index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/_index';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export type RoodState = ReturnType<typeof store.getState>;
