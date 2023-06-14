import {all, fork} from 'redux-saga/effects';
import songSaga from './songSaga';
import genreSaga from './genreSaga';
import songDetailSaga from './songDetailSaga';

export default function* rootSaga() {
  yield all([songSaga(), genreSaga(), songDetailSaga()]);
}
