// Imports: Dependencies
import { delay, takeEvery, takeLatest, put, select } from "redux-saga/effects";
import {
  getSearchHotelService,
  getHotelRecentlyViewedService,
  getSearchHotelByFilterService
} from "@api/hotel";
import {
  GET_HOTEL_RECENTLY_VIEWED,
  GET_HOTEL_RECENTLY_VIEWED_FAILED,
  GET_HOTEL_RECENTLY_VIEWED_PENDING,
  GET_HOTEL_RECENTLY_VIEWED_SUCCESS,
  GET_SEARCH_HOTEL_BY_FILTER,
  GET_SEARCH_HOTEL_BY_FILTER_FAILED,
  GET_SEARCH_HOTEL_BY_FILTER_SUCCESS,
  GET_SEARCH_HOTEL_BY_FILTER_PENDING,
} from "../definitions/hotelDefine";

const tokenState = (state) => state.user.accessToken;

function* getHotelViewed() {
  try {
    yield put({
      type: GET_HOTEL_RECENTLY_VIEWED_PENDING,
    });
    const token = yield select(tokenState);
    const hotelSearch = yield getHotelRecentlyViewedService({ token });
    yield put({
      type: GET_HOTEL_RECENTLY_VIEWED_SUCCESS,
      data: hotelSearch.data,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: GET_HOTEL_RECENTLY_VIEWED_FAILED,
      message: error,
    });
  }
}

function* getHotelByFilter(params) {
  try {
    yield put({ type: GET_SEARCH_HOTEL_BY_FILTER_PENDING, e });
    const hotelSearch = yield getSearchHotelByFilterService(params);
    yield put({
      type: GET_SEARCH_HOTEL_BY_FILTER_SUCCESS,
      receivedHotels: hotelSearch.data,
    });
  } catch (e) {
    yield put({ type: GET_SEARCH_HOTEL_BY_FILTER_FAILED, e });
  }
}
// Watcher: Decrease Counter
export function* watchHotelListSaga() {
  // Take Last Action Only
  yield takeLatest(GET_HOTEL_RECENTLY_VIEWED, getHotelViewed);
  yield takeLatest(GET_SEARCH_HOTEL_BY_FILTER, getHotelByFilter);
}
