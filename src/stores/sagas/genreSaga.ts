import {all, call, put, takeEvery} from 'redux-saga/effects';
import {FETCH_GENRE_REQUEST} from '../actions/genreActionTypes';
import {fetchSongGenresData} from '../../API/genres';
import {fetchGenresFailure, fetchGenresSuccess} from '../actions/genreAction';
import {AxiosResponse} from 'axios';

function* fetchGenresSaga() {
  try {
    const response: AxiosResponse = yield call(fetchSongGenresData);
    yield put(
      fetchGenresSuccess({
        genres: response.data,
      }),
    );
  } catch (error: any) {
    yield put(
      fetchGenresFailure({
        error: error.message,
      }),
    );
  }
}
function* genreSaga() {
  yield all([takeEvery(FETCH_GENRE_REQUEST, fetchGenresSaga)]);
}
export default genreSaga;
