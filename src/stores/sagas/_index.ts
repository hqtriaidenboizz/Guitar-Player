import {all} from 'redux-saga/effects';
import fetchSongSaga from './songSaga';
export default function* rootSaga() {
  yield all([fetchSongSaga()]);
  
}
