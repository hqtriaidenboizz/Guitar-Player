import {combineReducers} from 'redux';
import userReducer from './userReducer';
import songReducer from './songReducer';
import genreReducer from './genreReducer';
import songDetailReducer from './songDetailReducer';

const rootReducer = combineReducers({
  user: userReducer,
  song: songReducer,
  genre: genreReducer,
  songDetail: songDetailReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
