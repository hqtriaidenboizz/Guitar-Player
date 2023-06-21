import {AxiosResponse} from 'axios';
import {all, call, put, takeEvery} from 'redux-saga/effects';
import {fetchFavsSongData} from '../../API/songs';
import {FetchFavSongsRequest} from '../../types/song';
import {
  fetchFavSongsFailure,
  fetchFavSongsRequest,
  fetchFavSongsSuccess,
} from '../actions/songAction';
import {FETCH_FAVSONGS_REQUEST} from '../actions/songActionTypes';

function* fetchFavSongsSaga(id: FetchFavSongsRequest) {
  console.log('id saga',id?.id);
  
  try {
    const response: AxiosResponse = yield call(fetchFavsSongData, id?.id);
    console.log('data',response);
    
    yield put(
      fetchFavSongsSuccess({
        favSongs: response.data,
      }),
    );
  } catch (error: any) {
    yield put(
      fetchFavSongsFailure({
        error: error.message,
      }),
    );
  }
}

function* favSongsSaga() {
  yield all([takeEvery(FETCH_FAVSONGS_REQUEST, fetchFavSongsSaga)]);
}

export default favSongsSaga;
