import {all, call, put, takeLatest, takeEvery, fork} from 'redux-saga/effects';
import {fetchSongsData} from '../../API/songs';
import {
  fetchSongsFailure,
  fetchSongsRequest,
  fetchSongsSuccess,
} from '../actions/songAction';
import {FETCH_SONG_REQUEST} from '../actions/songActionTypes';
import {AxiosResponse} from 'axios';

function* fetchSongsSaga() {
  try {
    const response: AxiosResponse = yield call(fetchSongsData);
    yield put(
      fetchSongsSuccess({
        songs: response.data,
      }),
    );
  } catch (error: any) {
    yield put(
      fetchSongsFailure({
        error: error.message,
      }),
    );
  }
}
function* songSaga() {
  yield all([takeEvery(FETCH_SONG_REQUEST, fetchSongsSaga)]);
}
export default songSaga;
