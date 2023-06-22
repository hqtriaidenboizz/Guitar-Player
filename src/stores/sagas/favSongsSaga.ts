import {AxiosResponse} from 'axios';
import {all, call, put, takeEvery} from 'redux-saga/effects';
import {addFavSong, deleteFavSong, fetchFavsSongData} from '../../API/songs';
import {
  AddFavSongRequest,
  FetchFavSongsRequest,
  RemoveFavSongRequest,
} from '../../types/song';
import {
  addFavSongFailure,
  addFavSongSuccess,
  fetchFavSongsFailure,
  fetchFavSongsRequest,
  fetchFavSongsSuccess,
  removeFavSongFailure,
  removeFavSongReques,
  removeFavSongSuccess,
} from '../actions/songAction';
import {
  ADD_FAVSONG_REQUEST,
  FETCH_FAVSONGS_REQUEST,
  REMOVE_FAVSONG_REQUEST,
} from '../actions/songActionTypes';
import {useSelector} from 'react-redux';
import {RootState} from '../reducers/_index';

function* fetchFavSongsSaga(id: FetchFavSongsRequest) {
  try {
    const response: AxiosResponse = yield call(fetchFavsSongData, id?.id);
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

function* addFavSongSaga(payload: AddFavSongRequest) {
  try {
    // const updataFavSongs = payload.payload.favSongs.push(payload.)

    yield call(addFavSong, payload.payload.addFavSongTypes);
    yield put(
      addFavSongSuccess(),
    );
    yield put(fetchFavSongsRequest(payload.payload.addFavSongTypes.userId));
  } catch (error: any) {
    yield put(
      addFavSongFailure({
        error: error.message,
      }),
    );
  }
}

function* removeFavSongSaga(payload: RemoveFavSongRequest) {
  try {
    const updateFavSongs = payload.payload.FavSongs.filter(
      item => item.id !== payload.payload.id,
    );
    yield call(deleteFavSong, payload.payload.id);
    yield put(removeFavSongSuccess({favSongs: updateFavSongs}));
  } catch (error: any) {
    console.log(error);
    yield put(
      removeFavSongFailure({
        error: error.message,
      }),
    );
  }
}

function* favSongsSaga() {
  yield all([takeEvery(FETCH_FAVSONGS_REQUEST, fetchFavSongsSaga)]);
  yield all([takeEvery(REMOVE_FAVSONG_REQUEST, removeFavSongSaga)]);
  yield all([takeEvery(ADD_FAVSONG_REQUEST, addFavSongSaga)]);
}

export default favSongsSaga;
