import {all, call, put, takeEvery} from 'redux-saga/effects';
import {fetchLessonsData} from '../../API/lessons';
import {AxiosResponse} from 'axios';
import {
  fetchLessonsFailure,
  fetchLessonsSuccess,
} from '../actions/lessonsAction';
import {FETCH_LESSONS_REQUEST} from '../actions/lessonsActionTypes';

function* fetchlessonsSaga() {
  try {
    const response: AxiosResponse = yield call(fetchLessonsData);
    yield put(
      fetchLessonsSuccess({
        lessons: response.data,
      }),
    );
  } catch (error: any){
    yield put(
      fetchLessonsFailure({
        error: error.message,
      }),
    );
  }
}

function* lessonSaga() {
  yield all([takeEvery(FETCH_LESSONS_REQUEST, fetchlessonsSaga)]);
}
export default lessonSaga;
