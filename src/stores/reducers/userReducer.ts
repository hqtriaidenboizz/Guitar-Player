import {UserActions, UserState} from '../../types/user';

const initialState: UserState = {
  user: null,
  accessToken: null,
  pending: false,
  error: null,
};

const userReducer = (state = initialState, action: UserActions) => {
  switch (action.type) {
    case 'SIGNIN_REQUEST':
      return {
        ...state,
        pending: true,
      };
    case 'SIGNIN_SUCCESS':
      return {
        ...state,
        pending: false,
        accessToken: action.payload.accessToken,
      };
    case 'SIGNIN_FAILURE':
      return {
        ...state,
        pending: false,
        error: action.payload.error,
      };
    case 'FETCH_USER_REQUEST':
      return {
        ...state,
        pending: true,
      };
    case 'FETCH_USER_SUCCESS':
      return {
        ...state,
        pending: false,
        user: action.payload.user,
      };

    case 'FETCH_USER_FAILURE':
      return {
        ...state,
        pending: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default userReducer;
