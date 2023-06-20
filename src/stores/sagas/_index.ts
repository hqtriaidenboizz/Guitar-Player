import {all, fork} from 'redux-saga/effects';
import songSaga from './songSaga';
import genreSaga from './genreSaga';
import songDetailSaga from './songDetailSaga';
import userSaga from './userSaga';

export default function* rootSaga() {
  yield all([songSaga(), genreSaga(), songDetailSaga(), userSaga()]);
}
