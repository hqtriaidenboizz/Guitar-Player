import {call, all, takeEvery, put} from 'redux-saga/effects';
import {SIGNIN_REQUEST} from '../actions/signInActionTypes';
import {AxiosResponse} from 'axios';
import {FetchUserRequest, SignInRequest} from '../../types/user';
import {fetchUserData, signInUser} from '../../API/user';
import {signInFailure, signInSuccess} from '../actions/signInAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {fetchUserFailure, fetchUserSuccess} from '../actions/userAction';
import {FETCH_USER_REQUEST} from '../actions/userActionType';

function* signSaga(data: SignInRequest) {
  try {
    const response: AxiosResponse = yield call(signInUser, data.formData);    
    const user_Info: object = {
      access_token: response.data.access_token,
      user_id: response.data.user.id,
      user_email: response.data.user.email,
    };
    yield AsyncStorage.setItem('user_Info', JSON.stringify(user_Info));
    yield put(
      signInSuccess({
        user: response.data.user,
        accessToken: response.data.access_token,
      }),
    );
  } catch (error: any) {
    yield put(
      signInFailure({
        error: error.message,
      }),
    );
  }
}

function* fetchUserSaga(id: FetchUserRequest) {
  try {
    const response: AxiosResponse = yield call(fetchUserData, id?.id);
    yield put(
      fetchUserSuccess({
        user: response.data[0],
      }),
    );
  } catch (error: any) {
    yield put(
      fetchUserFailure({
        error: error.message,
      }),
    );
  }
}

function* userSaga() {
  yield all([takeEvery(SIGNIN_REQUEST, signSaga)]);
  yield all([takeEvery(FETCH_USER_REQUEST, fetchUserSaga)]);
}

export default userSaga;
