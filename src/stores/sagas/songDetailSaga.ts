import {call, all, takeEvery, put} from 'redux-saga/effects';
import {FETCH_SONGDETAIL_REQUEST} from '../actions/songActionTypes';
import {fetchSongDetailData, fetchSongsData} from '../../API/songs';
import {
  fetchSongDetailFailure,
  fetchSongDetailSuccess,
} from '../actions/songAction';
import {FetchSongDetailRequest, SongDetailActions} from '../../types/song';
import {AxiosResponse} from 'axios';

function* fetchSongDetailSaga(id: FetchSongDetailRequest) {
  const songId = id.id;
  try {
    const response: AxiosResponse = yield call(fetchSongDetailData, songId);   
    yield put(
      fetchSongDetailSuccess({
        songDetail: response.data,
      }),
    );
  } catch (error: any) {
    yield put(
      fetchSongDetailFailure({
        error: error.message,
      }),
    );
  }
}
function* songDetailSaga() {
  yield all([takeEvery(FETCH_SONGDETAIL_REQUEST, fetchSongDetailSaga)]);
}
export default songDetailSaga;
