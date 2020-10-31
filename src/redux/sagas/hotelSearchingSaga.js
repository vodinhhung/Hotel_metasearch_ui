// Imports: Dependencies
import { delay, takeEvery, takeLatest, put } from "redux-saga/effects";
import { getSearchHotelService } from "../../api/hotel";
import {
  GET_SEARCH_HOTEL,
  GET_SEARCH_HOTEL_FAILED,
  GET_SEARCH_HOTEL_PENDING,
  GET_SEARCH_HOTEL_SUCCESS,
} from "../definitions/hotelDefine";

function* getSearchHotel(params) {
  try {
    yield put({
      type: GET_SEARCH_HOTEL_PENDING,
    });

    const hotelSearch = yield getSearchHotelService(params);
    yield put({
      type: GET_SEARCH_HOTEL_SUCCESS,
      data: hotelSearch.data,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: GET_SEARCH_HOTEL_FAILED,
      message: error,
    });
  }
}
// Watcher: Decrease Counter
export function* watchHotelSearching() {
  // Take Last Action Only
  yield takeLatest(GET_SEARCH_HOTEL, getSearchHotel);
}
