import {
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
