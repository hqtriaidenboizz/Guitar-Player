import {SignInFormData} from '../screens/auth/SignIn';
import {
  FETCH_LESSONDATAUSER_FAILURE,
  FETCH_LESSONDATAUSER_REQUEST,
  FETCH_LESSONDATAUSER_SUCCESS,
} from '../stores/actions/lessonsActionTypes';
import {
  SIGNIN_FAILURE,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
} from '../stores/actions/signInActionTypes';

import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from '../stores/actions/userActionType';

export interface User {
  id: string;
  email: string;
  userName: string;
  avatar: string | null;
}

export interface UserState {
  pending: boolean;
  user: User | null;
  error: string | null;
  accessToken: string | null;
}

export interface SignInSuccessPayload {
  user: User;
  accessToken: string;
}

export interface SignInFailurePayload {
  error: string;
}

export type SignInRequest = {
  type: typeof SIGNIN_REQUEST;
  formData: SignInFormData;
};

export type SignInSuccess = {
  type: typeof SIGNIN_SUCCESS;
  payload: SignInSuccessPayload;
};

export type SignInFailure = {
  type: typeof SIGNIN_FAILURE;
  payload: SignInFailurePayload;
};

//  fetch user Data

export interface FetchUserSuccessPayload {
  user: User;
}

export interface FetchUserFailurePayload {
  error: string;
}

export interface FetchUserRequest {
  type: typeof FETCH_USER_REQUEST;
  id: string | undefined;
}

export interface FetchUserSuccess {
  type: typeof FETCH_USER_SUCCESS;
  payload: FetchUserSuccessPayload;
}

export interface FetchUserFailure {
  type: typeof FETCH_USER_FAILURE;
  payload: FetchUserFailurePayload;
}

export type UserActions =
  | FetchUserFailure
  | FetchUserRequest
  | FetchUserSuccess
  | SignInRequest
  | SignInFailure
  | SignInSuccess;

// lesson Data of user

export interface lessonDataUser {
  id: string;
  lessonId: number;
  userId: string;
  status: boolean;
  score: number;
}

export interface lessonDataUserState {
  pending: boolean;
  lessonDataUser: lessonDataUser[];
  error: string | null;
}

export interface FetchLessonDataUserSuccessPayload {
  data: lessonDataUser[];
}

export interface FetchLessonDataUserFailurePayload {
  error: string;
}

export interface FetchLessonDataUserRequestPayload {
  id: string;
}

export type FetchLessonDataUserRequest = {
  type: typeof FETCH_LESSONDATAUSER_REQUEST;
  payload: FetchLessonDataUserRequestPayload;
};

export type FetchLessonDataUserSuccess = {
  type: typeof FETCH_LESSONDATAUSER_SUCCESS;
  payload: FetchLessonDataUserSuccessPayload;
};

export type FetchLessonDataUserFailure = {
  type: typeof FETCH_LESSONDATAUSER_FAILURE;
  payload: FetchLessonDataUserFailurePayload;
};

export type LessonDataUserActions =
  | FetchLessonDataUserRequest
  | FetchLessonDataUserSuccess
  | FetchLessonDataUserFailure;
