import {all, fork} from 'redux-saga/effects';
import songSaga from './songSaga';
import genreSaga from './genreSaga';
import songDetailSaga from './songDetailSaga';
import userSaga from './userSaga';
import favSongsSaga from './favSongsSaga';

export default function* rootSaga() {
  yield all([
    userSaga(),
    songSaga(),
    genreSaga(),
    favSongsSaga(),
    songDetailSaga(),
  ]);
}
