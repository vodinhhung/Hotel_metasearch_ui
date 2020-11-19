// Imports: Dependencies
import { delay, takeEvery, takeLatest, put, select } from "redux-saga/effects";

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

import {
  getHotelRecentlyViewedService,
  getSearchHotelByFilterService,
} from "@api/hotel";
const tokenState = (state) => state.user.accessToken;
const searchParamsState = (state) => state.hotelSearchingByFilter.params;
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
    yield put({
      type: GET_HOTEL_RECENTLY_VIEWED_FAILED,
      message: error,
    });
  }
}

function* getHotelByFilter(params) {
  try {
    yield put({ type: GET_SEARCH_HOTEL_BY_FILTER_PENDING });
    const searchParams = yield select(searchParamsState);
    const hotelSearch = yield getSearchHotelByFilterService(searchParams);
    yield put({
      type: GET_SEARCH_HOTEL_BY_FILTER_SUCCESS,
      data: hotelSearch.data,
      action: params.params
    });
  } catch (e) {
    yield put({ type: GET_SEARCH_HOTEL_BY_FILTER_FAILED, message: e });
  }
}
// Watcher: Decrease Counter
export function* watchHotelListSaga() {
  // Take Last Action Only
  yield takeLatest(GET_HOTEL_RECENTLY_VIEWED, getHotelViewed);
  yield takeLatest(GET_SEARCH_HOTEL_BY_FILTER, getHotelByFilter);
}
