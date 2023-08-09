import {combineReducers} from 'redux';
import userReducer from './userReducer';
import songReducer from './songReducer';
import genreReducer from './genreReducer';
import songDetailReducer from './songDetailReducer';
import favSongsReducer from './favSongsReducer';
import lessonReducer from './lessonReducer';
import lessonDataUserReducer from './lessonDataUser';

const rootReducer = combineReducers({
  user: userReducer,
  song: songReducer,
  genre: genreReducer,
  songDetail: songDetailReducer,
  favSongs: favSongsReducer,
  lesson: lessonReducer,
  lessonDataUser: lessonDataUserReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
