import {all, call, put, takeLatest, takeEvery, fork} from 'redux-saga/effects';
import {fetchSongsData} from '../../API/songs';
import {
  fetchSongsFailure,
  fetchSongsRequest,
  fetchSongsSuccess,
} from '../actions/songAction';

function* fetchSongsSaga() {
  try {
    const response = yield call(fetchSongsData);
    yield put(fetchSongsRequest());
    if (response && response.data) {
      yield put(
        fetchSongsSuccess({
          songs: response.data,
        }),
      );
    } else {
      throw new Error('Invalid response');
    }
  } catch (e: any) {
    yield put(
      fetchSongsFailure({
        error: e.message,
      }),
    );
  }
}
function* songSaga() {
  yield all([fork(fetchSongsSaga)]);
}
export default songSaga;
