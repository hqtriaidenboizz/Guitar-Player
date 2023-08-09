import { LessonDataUserActions, lessonDataUser, lessonDataUserState } from "../../types/user"

const initialState: lessonDataUserState = {
  pending: false,
  lessonDataUser: [],
  error: null
};
const lessonDataUserReducer = (
  state = initialState,
  action: LessonDataUserActions,
) => {
  switch (action.type) {
    case 'FETCH_LESSONDATAUSER_REQUEST':
      return {
        ...state,
        pending: true,
      };
    case 'FETCH_LESSONDATAUSER_SUCCESS': 
      return {
        ...state,
        pending: false,
        lessonDataUser: action.payload.data,
      };
    case 'FETCH_LESSONDATAUSER_FAILURE' :
      return {
        ...state,
        pending: false,
        error: action.payload.error
      }
    default :
      return {
        ...state
      }
  }
};

export default lessonDataUserReducer;