import {
  FetchGenresFailure,
  FetchGenresFailurePayload,
  FetchGenresRequest,
  FetchGenresSuccess,
  FetchGenresSuccessPayload,
} from '../../types/genres';
import * as genreActionTypes from './genreActionTypes';

export const fetchGenresRequest = (): FetchGenresRequest => ({
  type: genreActionTypes.FETCH_GENRE_REQUEST,
});

export const fetchGenresSuccess = (
  payload: FetchGenresSuccessPayload,
): FetchGenresSuccess => ({
  type: genreActionTypes.FETCH_GENRE_SUCCESS,
  payload,
});

export const fetchGenresFailure = (
  payload: FetchGenresFailurePayload,
): FetchGenresFailure => ({
  type: genreActionTypes.FETCH_GENRE_FAILURE,
  payload,
});
