// Imports: Dependencies
import { delay, takeEvery, takeLatest, put, select } from "redux-saga/effects";
import { loginRequestService, getHotelLikeService, setHotelLikeService } from "@api/user";
import {
  LOGIN_REQUEST,
  REQUEST_LOGGING,
  LOGGING_FAILED,
  LOGGING_SUCCESS,
  GET_HOTEL_LIKE_PENDING,
  GET_HOTEL_LIKE_SUCCESS,
  GET_HOTEL_LIKE_FAILED,
  GET_HOTEL_LIKE,
  SET_HOTEL_LIKE,
  SET_HOTEL_LIKE_PENDING,
  SET_HOTEL_LIKE_SUCCESS,
  SET_HOTEL_LIKE_FAILED
} from "../definitions/userDefine";

const tokenState = (state) => state.user.accessToken;
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
function* getHotelLike() {
  try {
    yield put({
      type: GET_HOTEL_LIKE_PENDING,
    });
    const token = yield select(tokenState);
    const hotelLike = yield getHotelLikeService({ token });
    yield put({
      type: GET_HOTEL_LIKE_SUCCESS,
      data: hotelLike.data,
    });
  } catch (e) {
    yield put({
      type: GET_HOTEL_LIKE_FAILED,
    });
  }
}
function* setHotelLike(requestSaga) {
  try {
    yield put({
      type: SET_HOTEL_LIKE_PENDING,
    });
    const token = yield select(tokenState);
    const userInfo = yield setHotelLikeService({token, hotelId: requestSaga.params});
    yield put({
      type: SET_HOTEL_LIKE_SUCCESS,
      data: userInfo.data,
    });
    yield getHotelLike();
  } catch (error) {
    yield put({
      type: SET_HOTEL_LIKE_FAILED,
      message: error,
    });
  }
}
// Watcher: Decrease Counter
export function* watchUserSaga() {
  // Take Last Action Only
  yield takeLatest(SET_HOTEL_LIKE,setHotelLike);
  yield takeLatest(GET_HOTEL_LIKE, getHotelLike);
  yield takeLatest(LOGIN_REQUEST, loginRequest);
}
