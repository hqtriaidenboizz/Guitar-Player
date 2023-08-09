import {GenreState, GenresActions} from '../../types/genres';

const initialState: GenreState = {
  pending: false,
  genres: [],
  error: null,
};
const genreReducer = (state = initialState, actions: GenresActions) => {
  switch (actions.type) {
    case 'FETCH_GENRE_REQUEST':
      return {
        ...state,
        pending: true,
      };
    case 'FETCH_GENRE_SUCCESS':
      return {
        ...state,
        genres: actions.payload.genres,
        pending: false,
      };
    case 'FETCH_GENRE_FAILURE':
      return {
        ...state,
        error: actions.payload.error,
        pending: false,
      };
    default:
      return {...state};
  }
};
export default genreReducer;
