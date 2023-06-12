import {combineReducers} from 'redux';
import userReducer from './userReducer';
import songReducer from './songReducer';

const rootReducer = combineReducers({
  user: userReducer,
  song: songReducer
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
