// Imports: Dependencies
import { delay, takeEvery, takeLatest, put } from "redux-saga/effects";
import { getHotelDetailService } from "../../api/hotel";
import {
  GET_HOTEL_DETAIL,
  GET_HOTEL_DETAIL_FAILED,
  GET_HOTEL_DETAIL_PENDING,
  GET_HOTEL_DETAIL_SUCCESS,
} from "../definitions/hotelDefine";

function* getHotelDetail(hotelID) {
  try {
    // Dispatch Action To Redux Store
    yield put({
      type: GET_HOTEL_DETAIL_PENDING,
    });

    const hotelDetail = yield getHotelDetailService(hotelID.id);
    yield put({
      type: GET_HOTEL_DETAIL_SUCCESS,
      data: hotelDetail
    })
  } catch (error) {
    yield put({
      type: GET_HOTEL_DETAIL_FAILED,
      message: error,
    });
  }
}
export function* watchHotelDetail() {
  yield takeLatest(GET_HOTEL_DETAIL, getHotelDetail);
}
