import {
  FetchSongsFailure,
  FetchSongsFailurePayload,
  FetchSongsRequest,
  FetchSongsSuccess,
  FetchSongsSuccessPayload,
} from '../../types/song';
import * as songActionTypes from './songActionTypes';

export const fetchSongsRequest = (): FetchSongsRequest => ({
  type: 'FETCH_SONG_REQUEST',
});

export const fetchSongsSuccess = (
  payload: FetchSongsSuccessPayload,
): FetchSongsSuccess => ({
  type: songActionTypes.FETCH_SONG_SUCCESS,
  payload,
});

export const fetchSongsFailure = (
  payload: FetchSongsFailurePayload,
): FetchSongsFailure => ({
  type: 'FETCH_SONG_FAILURE',
  payload,
});
