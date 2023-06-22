import {SignInFormData} from '../screens/auth/SignIn';
import {
  SIGNIN_FAILURE,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
} from '../stores/actions/signInActionTypes';
import {FETCH_SONG_SUCCESS} from '../stores/actions/songActionTypes';
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
