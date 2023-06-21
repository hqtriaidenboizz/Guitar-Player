import { FavsSongsState, FetchFavSongsActions } from "../../types/song"

const initialState: FavsSongsState = {
  pending: false,
  favSongs: [],
  error: null,
}
const favSongsReducer = (state = initialState, action: FetchFavSongsActions) => {
  switch(action.type){
    case 'FETCH_FAVSONGS_REQUEST': 
      return {
        ...state,
        pending: true
      }
    case 'FETCH_FAVSONGS_SUCCESS': 
      return {
        ...state,
        pending:false,
        favSongs: action.payload.favSongs 
      }
    case 'FETCH_FAVSONGS_FAILURE': 
      return {
        ...state,
        pending: false,
        error: action.payload.error
      }
    default:
      return{
        ...state
      }
  }
};

export default favSongsReducer;