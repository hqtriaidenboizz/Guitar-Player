import {
  AddFavSongFailure,
  AddFavSongFailurePayload,
  AddFavSongRequest,
  AddFavSongRequestPayload,
  AddFavSongSuccess,
  FavSongs,
  FetchFavSongsFailure,
  FetchFavSongsFailurePayload,
  FetchFavSongsRequest,
  FetchFavSongsSuccess,
  FetchFavSongsSuccessPayload,
  FetchSongDetailFailure,
  FetchSongDetailFailurePayload,
  FetchSongDetailRequest,
  FetchSongDetailSuccess,
  FetchSongDetailSuccessPayload,
  FetchSongsFailure,
  FetchSongsFailurePayload,
  FetchSongsRequest,
  FetchSongsSuccess,
  FetchSongsSuccessPayload,
  RemoveFavSongFailure,
  RemoveFavSongFailurePayload,
  RemoveFavSongRequest,
  RemoveFavSongRequestPayload,
  RemoveFavSongSuccess,
  RemoveFavSongSuccessPayload,
} from '../../types/song';

export const fetchSongsRequest = (): FetchSongsRequest => ({
  type: 'FETCH_SONG_REQUEST',
});

export const fetchSongsSuccess = (
  payload: FetchSongsSuccessPayload,
): FetchSongsSuccess => ({
  type: 'FETCH_SONG_SUCCESS',
  payload,
});

export const fetchSongsFailure = (
  payload: FetchSongsFailurePayload,
): FetchSongsFailure => ({
  type: 'FETCH_SONG_FAILURE',
  payload,
});

// songdetail

export const fetchSongDetailRequest = (id: number): FetchSongDetailRequest => ({
  type: 'FETCH_SONGDETAIL_REQUEST',
  id: id,
});

export const fetchSongDetailSuccess = (
  payload: FetchSongDetailSuccessPayload,
): FetchSongDetailSuccess => ({
  type: 'FETCH_SONGDETAIL_SUCCESS',
  payload,
});

export const fetchSongDetailFailure = (
  payload: FetchSongDetailFailurePayload,
): FetchSongDetailFailure => ({
  type: 'FETCH_SONGDETAIL_FAILURE',
  payload,
});

// fetch fav songs

export const fetchFavSongsRequest = (
  id: string | undefined,
): FetchFavSongsRequest => ({
  type: 'FETCH_FAVSONGS_REQUEST',
  id: id,
});

export const fetchFavSongsSuccess = (
  payload: FetchFavSongsSuccessPayload,
): FetchFavSongsSuccess => ({
  type: 'FETCH_FAVSONGS_SUCCESS',
  payload,
});

export const fetchFavSongsFailure = (
  payload: FetchFavSongsFailurePayload,
): FetchFavSongsFailure => ({
  type: 'FETCH_FAVSONGS_FAILURE',
  payload,
});

// add fav song
export const addFavSongRequest = (
  payload: AddFavSongRequestPayload,
): AddFavSongRequest => ({
  type: 'ADD_FAVSONG_REQUEST',
  payload,
});

export const addFavSongSuccess = (
): AddFavSongSuccess => ({
  type: 'ADD_FAVSONG_SUCCESS'
});

export const addFavSongFailure = (
  payload: AddFavSongFailurePayload,
): AddFavSongFailure => ({
  type: 'ADD_FAVSONG_FAILURE',
  payload,
});

// delete fav song
export const removeFavSongReques = (
  payload: RemoveFavSongRequestPayload,
): RemoveFavSongRequest => ({
  type: 'REMOVE_FAVSONG_REQUEST',
  payload,
});

export const removeFavSongSuccess = (
  payload: RemoveFavSongSuccessPayload,
): RemoveFavSongSuccess => ({
  type: 'REMOVE_FAVSONG_SUCCESS',
  payload,
});

export const removeFavSongFailure = (
  payload: RemoveFavSongFailurePayload,
): RemoveFavSongFailure => ({
  type: 'REMOVE_FAVSONG_FAILURE',
  payload,
});
