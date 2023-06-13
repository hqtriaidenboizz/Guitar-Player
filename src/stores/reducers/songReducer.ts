import {SongState, SongsActions} from '../../types/song';
import * as songActionTypes from '../actions/songActionTypes';

const initalState: SongState = {
  pending: false,
  songs: [],
  error: null,
};
const songReducer = (state = initalState, action: SongsActions) => {
  switch (action.type) {
    case songActionTypes.FETCH_SONG_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case songActionTypes.FETCH_SONG_SUCCESS:
      return {
        ...state,
        songs: action.payload.songs,
        pending: false,
      };
    case songActionTypes.FETCH_SONG_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        songs: [],
        pending: false,
      };
    default:
      return {...state};
  }
};
export default songReducer;
