import * as genreActionTypes from '../stores/actions/genreActionTypes';
export interface Genre {
  id: string;
  categoryName: string;
  image: string;
  color: string
}

export interface GenreState {
  pending: boolean;
  genres: Genre[];
  error: string | null;
}

export interface FetchGenresSuccessPayload {
  genres: Genre[];
}

export interface FetchGenresFailurePayload {
  error: string;
}

export interface FetchGenresRequest {
  type: typeof genreActionTypes.FETCH_GENRE_REQUEST;
}

export interface FetchGenresSuccess {
  type: typeof genreActionTypes.FETCH_GENRE_SUCCESS;
  payload: FetchGenresSuccessPayload;
}

export interface FetchGenresFailure {
  type: typeof genreActionTypes.FETCH_GENRE_FAILURE;
  payload: FetchGenresFailurePayload;
}

export type GenresActions =
  | FetchGenresRequest
  | FetchGenresSuccess
  | FetchGenresFailure;
