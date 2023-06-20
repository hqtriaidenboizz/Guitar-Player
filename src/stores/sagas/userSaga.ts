import {call, all, takeEvery, put} from 'redux-saga/effects';
import {SIGNIN_REQUEST} from '../actions/signInActionTypes';
import {AxiosResponse} from 'axios';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {SignInRequest} from '../../types/user';
import {signInUser} from '../../API/user';
import {signInFailure, signInSuccess} from '../actions/signInAction';
import AsyncStorage from '@react-native-async-storage/async-storage';

function* signSaga(data: SignInRequest) {
  try {
    const response: AxiosResponse = yield call(signInUser, data.formData);
    const user_Info: object = {
      access_token: response.data.access_token,
      user_id: response.data.user.id,
      user_email: response.data.user.email,
    };
    yield put(
      signInSuccess({
        user: response.data.user,
        accessToken: response.data.access_token,
      }),
    );
    yield AsyncStorage.setItem('user_Info', JSON.stringify(user_Info));
  } catch (error: any) {
    yield put(
      signInFailure({
        error: error.message,
      }),
    );
  }
}

function*fetchUserData(){
  
}

function* userSaga() {
  yield all([takeEvery(SIGNIN_REQUEST, signSaga)]);
}
export default userSaga;
