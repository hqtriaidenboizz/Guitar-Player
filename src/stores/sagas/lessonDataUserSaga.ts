import {all, call, put, takeEvery} from 'redux-saga/effects';
import {FETCH_LESSONDATAUSER_REQUEST} from '../actions/lessonsActionTypes';
import {fetchLessonDataUserFailure} from '../actions/lessonsAction';
import { AxiosResponse } from 'axios';

function* fetchLessonDataUserSaga() {
  try {
    // const response: AxiosResponse = yield call();
  } catch (error: any) {
    yield put(
      fetchLessonDataUserFailure({
        error: error.message,
      }),
    );
  }
}

function* lessonDataUserSaga() {
  yield all([takeEvery(FETCH_LESSONDATAUSER_REQUEST, fetchLessonDataUserSaga)]);
}
