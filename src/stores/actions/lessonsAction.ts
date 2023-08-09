import {
  FetchLessonsFailure,
  FetchLessonsFailurePayload,
  FetchLessonsRequest,
  FetchLessonsSuccess,
  FetchLessonsSuccessPayload,
} from '../../types/lesson';
import {
  FetchLessonDataUserFailure,
  FetchLessonDataUserFailurePayload,
  FetchLessonDataUserRequest,
  FetchLessonDataUserRequestPayload,
  FetchLessonDataUserSuccess,
  FetchLessonDataUserSuccessPayload,
} from '../../types/user';

export const fetchLessonsRequest = (): FetchLessonsRequest => ({
  type: 'FETCH_LESSONS_REQUEST',
});
export const fetchLessonsSuccess = (
  payload: FetchLessonsSuccessPayload,
): FetchLessonsSuccess => ({
  type: 'FETCH_LESSONS_SUCCESS',
  payload,
});
export const fetchLessonsFailure = (
  payload: FetchLessonsFailurePayload,
): FetchLessonsFailure => ({
  type: 'FETCH_LESSONS_FAILURE',
  payload,
});

export const fetchLessonDataUserRequest = (
  payload: FetchLessonDataUserRequestPayload,
): FetchLessonDataUserRequest => ({
  type: 'FETCH_LESSONDATAUSER_REQUEST',
  payload,
});

export const fetchLessonDataUserSuccess = (
  payload: FetchLessonDataUserSuccessPayload,
): FetchLessonDataUserSuccess => ({
  type: 'FETCH_LESSONDATAUSER_SUCCESS',
  payload,
});

export const fetchLessonDataUserFailure = (
  payload: FetchLessonDataUserFailurePayload,
): FetchLessonDataUserFailure => ({
  type: 'FETCH_LESSONDATAUSER_FAILURE',
  payload,
});
