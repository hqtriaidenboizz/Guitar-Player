import { FavSongsActions, FavsSongsState } from "../../types/song"

const initialState: FavsSongsState = {
  pending: false,
  favSongs: [],
  error: null,
}
const favSongsReducer = (state = initialState, action: FavSongsActions) => {
  switch (action.type) {
    case 'FETCH_FAVSONGS_REQUEST':
      return {
        ...state,
        pending: true,
      };
    case 'FETCH_FAVSONGS_SUCCESS':
      return {
        ...state,
        pending: false,
        favSongs: action.payload.favSongs,
      };
    case 'FETCH_FAVSONGS_FAILURE':
      return {
        ...state,
        pending: false,
        error: action.payload.error,
      };
    case 'ADD_FAVSONG_REQUEST' :
      return {
        ...state,
        pending: true,
      }
    case 'ADD_FAVSONG_SUCCESS':
      return {
        ...state,
        pending: false,
      }
    case 'ADD_FAVSONG_FAILURE': 
      return {
        ...state,
        pending: false,
        error: action.payload.error
      }
    case 'REMOVE_FAVSONG_REQUEST' :
      return {
        ...state,
        pending: true,
      }
    case 'REMOVE_FAVSONG_SUCCESS': 
      return {
        ...state,
        pending: false,
        favSongs: action.payload.favSongs
      }
    case 'REMOVE_FAVSONG_FAILURE': 
      return {
        ...state,
        pending: false,
        error: action.payload.error
      }
    default:
      return {
        ...state,
      };
  }
};

export default favSongsReducer;