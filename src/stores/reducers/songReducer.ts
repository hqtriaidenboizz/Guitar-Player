import {SongsState, SongsActions} from '../../types/song';

const initalState: SongsState = {
  pending: false,
  songs: [],
  error: null,
};
const songReducer = (state = initalState, action: SongsActions) => {
  switch (action.type) {
    case 'FETCH_SONG_REQUEST':
      return {
        ...state,
        pending: true,
      };
    case 'FETCH_SONG_SUCCESS':
      return {
        ...state,
        songs: action.payload.songs,
        pending: false,
      };
    case 'FETCH_SONG_FAILURE':
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
