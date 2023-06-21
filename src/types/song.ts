import {
  FETCH_FAVSONGS_FAILURE,
  FETCH_FAVSONGS_REQUEST,
  FETCH_FAVSONGS_SUCCESS,
  FETCH_SONGDETAIL_FAILURE,
  FETCH_SONGDETAIL_REQUEST,
  FETCH_SONGDETAIL_SUCCESS,
  FETCH_SONG_FAILURE,
  FETCH_SONG_REQUEST,
  FETCH_SONG_SUCCESS,
} from '../stores/actions/songActionTypes';

export interface Song {
  id: number;
  songName: string;
  view: number;
  chords: Array<string>;
  image: string;
  lyrics: object;
  categoryID: number;
  artistName: string;
}

export interface SongsState {
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
  type: typeof FETCH_SONG_REQUEST;
}

export type FetchSongsSuccess = {
  type: typeof FETCH_SONG_SUCCESS;
  payload: FetchSongsSuccessPayload;
};

export type FetchSongsFailure = {
  type: typeof FETCH_SONG_FAILURE;
  payload: FetchSongsFailurePayload;
};

export type SongsActions =
  | FetchSongsFailure
  | FetchSongsSuccess
  | FetchSongsRequest;

// songdetail

export interface SongDetailState {
  pending: boolean;
  songDetail: Song[];
  error: string | null;
}

export interface FetchSongDetailSuccessPayload {
  songDetail: [];
}

export interface FetchSongDetailFailurePayload {
  error: string;
}

export interface FetchSongDetailRequest {
  type: typeof FETCH_SONGDETAIL_REQUEST;
  id: number;
}

export type FetchSongDetailSuccess = {
  type: typeof FETCH_SONGDETAIL_SUCCESS;
  payload: FetchSongDetailSuccessPayload;
};

export type FetchSongDetailFailure = {
  type: typeof FETCH_SONGDETAIL_FAILURE;
  payload: FetchSongDetailFailurePayload;
};

export type SongDetailActions =
  | FetchSongDetailFailure
  | FetchSongDetailSuccess
  | FetchSongDetailRequest;

// favslistSong
export interface favSong {
  artistName: string;
  id: number;
  image: string;
  songName: string;
}

export interface FavSongs {
  songId: number;
  id: number
  songs: favSong;
}

export interface FavsSongsState {
  pending: boolean;
  favSongs: FavSongs[];
  error: string | null;
}

export interface FetchFavSongsSuccessPayload {
  favSongs: FavSongs[];
}

export interface FetchFavSongsFailurePayload {
  error: string;
}

export type FetchFavSongsRequest = {
  type: typeof FETCH_FAVSONGS_REQUEST;
  id: string | undefined ;
};

export type FetchFavSongsSuccess = {
  type: typeof FETCH_FAVSONGS_SUCCESS;
  payload: FetchFavSongsSuccessPayload;
};

export type FetchFavSongsFailure = {
  type: typeof FETCH_FAVSONGS_FAILURE;
  payload: FetchFavSongsFailurePayload;
};

export type FetchFavSongsActions =
  | FetchFavSongsFailure
  | FetchFavSongsRequest
  | FetchFavSongsSuccess;
