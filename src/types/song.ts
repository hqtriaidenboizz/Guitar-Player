import * as songActionTypes from '../stores/actions/songActionTypes';

export interface Song {
  id: string;
  songName: string;
  view: number;
  chords: Array<string>;
  image: string;
  lyrics: object;
}

export interface SongState {
  pending: boolean;
  songs: Song[];
  error: string | null;
}

export interface FetchSongsSuccessPayload {
  songs: Song[];
}

export interface FetchSongsFailurePayload {
  error: string;
}

export interface FetchSongsRequest {
  type: typeof songActionTypes.FETCH_SONG_REQUEST;
}

export type FetchSongsSuccess = {
  type: typeof songActionTypes.FETCH_SONG_SUCCESS;
  payload: FetchSongsSuccessPayload;
};

export type FetchSongsFailure = {
  type: typeof songActionTypes.FETCH_SONG_FAILURE;
  payload: FetchSongsFailurePayload;
};

export type SongsActions =
  | FetchSongsFailure
  | FetchSongsSuccess
  | FetchSongsRequest;
