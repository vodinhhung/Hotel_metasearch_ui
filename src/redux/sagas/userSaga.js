// Imports: Dependencies
import { delay, takeEvery, takeLatest, put } from "redux-saga/effects";
import { loginRequestService } from "@api/user";
import {
  LOGIN_REQUEST,
  REQUEST_LOGGING,
  LOGGING_FAILED,
  LOGGING_SUCCESS,
} from "../definitions/userDefine";
function* loginRequest(requestSaga) {
  try {
    yield put({
      type: REQUEST_LOGGING,
    });
    const userInfo = yield loginRequestService(requestSaga.params);
    yield put({
      type: LOGGING_SUCCESS,
      data: userInfo.data,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: LOGGING_FAILED,
      message: error,
    });
  }
}
// Watcher: Decrease Counter
export function* watchUserSaga() {
  // Take Last Action Only
  yield takeLatest(LOGIN_REQUEST, loginRequest);
}
