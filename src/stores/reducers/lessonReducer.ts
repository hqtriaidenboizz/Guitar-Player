import {LessonsActions, LessonsState} from '../../types/lesson';

const initialState: LessonsState = {
  pending: false,
  lessons: [],
  error: null,
};

const lessonReducer = (state = initialState, actions: LessonsActions) => {
  switch (actions.type) {
    case 'FETCH_LESSONS_REQUEST':
      return {
        ...state,
        pending: true,
      };
    case 'FETCH_LESSONS_SUCCESS':
      return {
        ...state,
        pending: false,
        lessons: actions.payload.lessons,
      };
    case 'FETCH_LESSONS_FAILURE':
      return {
        ...state,
        pending: false,
        error: actions.payload.error,
      };
    default : 
      return {
        ...state
      }
  }
};
export default lessonReducer;
