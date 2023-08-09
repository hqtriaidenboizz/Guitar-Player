import {
  FETCH_LESSONS_FAILURE,
  FETCH_LESSONS_REQUEST,
  FETCH_LESSONS_SUCCESS,
} from '../stores/actions/lessonsActionTypes';

export interface Lesson {
  id: number;
  title: string;
  status: boolean;
  score: number;
  chordList: Array<string>;
}

export interface LessonsState {
  pending: boolean;
  lessons: Lesson[];
  error: string | null;
}

export interface FetchLessonsSuccessPayload {
  lessons: Lesson[];
}

export interface FetchLessonsFailurePayload {
  error: string;
}

export interface FetchLessonsRequest {
  type: typeof FETCH_LESSONS_REQUEST;
}

export type FetchLessonsSuccess = {
  type: typeof FETCH_LESSONS_SUCCESS;
  payload: FetchLessonsSuccessPayload;
};

export type FetchLessonsFailure = {
  type: typeof FETCH_LESSONS_FAILURE;
  payload: FetchLessonsFailurePayload;
};

export type LessonsActions =
  | FetchLessonsFailure
  | FetchLessonsSuccess
  | FetchLessonsRequest;
