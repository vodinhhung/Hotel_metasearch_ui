// Imports: Dependencies
import { delay, takeEvery, takeLatest, select, put } from "redux-saga/effects";
import { getHotelDetailService } from "@api/hotel";
import {
  GET_HOTEL_DETAIL,
  GET_HOTEL_DETAIL_FAILED,
  GET_HOTEL_DETAIL_PENDING,
  GET_HOTEL_DETAIL_SUCCESS,
} from "../definitions/hotelDefine";

const convertSearchHotelToHotelDetail = (hotel) => {
  return {
    ...hotel,
    assets: [hotel.logo],
    prices: [hotel.price],
    description: ""
  };
};
function* getHotelDetail(hotelParams) {
  try {
    // Dispatch Action To Redux Store
    yield put({
      type: GET_HOTEL_DETAIL_PENDING,
      data: convertSearchHotelToHotelDetail(hotelParams.hotel),
    });

    const hotelDetailRes = yield getHotelDetailService(hotelParams.hotel.id);
    yield put({
      type: GET_HOTEL_DETAIL_SUCCESS,
      data: hotelDetailRes.data,
    });
  } catch (error) {
    yield put({
      type: GET_HOTEL_DETAIL_FAILED,
      message: error,
    });
  }
}
export function* watchHotelDetailSaga() {
  yield takeLatest(GET_HOTEL_DETAIL, getHotelDetail);
}
