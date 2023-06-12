import {call, put} from 'redux-saga/effects';
import {fetchSongsData} from '../../API/songs';
import {Song} from '../../types/song';
import {fetchSongsFailure, fetchSongsSuccess} from '../actions/songAction';

function* fetchSongSaga() {
  try {
    const response: Song[]= yield fetchSongsData();
    console.log(response);
    
    yield put(
      fetchSongsSuccess({
        songs: response,
      }),
    );
  } catch (e: any) {
    yield put(
      fetchSongsFailure({
        error: e.message,
      }),
    );
  }
}
export default fetchSongSaga;
