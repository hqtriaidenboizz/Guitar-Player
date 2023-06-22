import {Paypal} from 'iconoir-react-native';
import {
  FetchUserFailure,
  FetchUserFailurePayload,
  FetchUserRequest,
  FetchUserSuccess,
  FetchUserSuccessPayload,
} from '../../types/user';

export const fetchUserRequest = (id: string | undefined): FetchUserRequest => ({
  type: 'FETCH_USER_REQUEST',
  id,
});

export const fetchUserSuccess = (
  payload: FetchUserSuccessPayload,
): FetchUserSuccess => ({
  type: 'FETCH_USER_SUCCESS',
  payload,
});

export const fetchUserFailure = (
  payload: FetchUserFailurePayload,
): FetchUserFailure => ({
  type: 'FETCH_USER_FAILURE',
  payload,
});
