// Imports: Dependencies
import { delay, takeEvery, takeLatest, put, select } from "redux-saga/effects";
import {
  getSearchHotelService,
  getHotelRecentlyViewedService,
} from "@api/hotel";
import {
  GET_HOTEL_RECENTLY_VIEWED,
  GET_HOTEL_RECENTLY_VIEWED_FAILED,
  GET_HOTEL_RECENTLY_VIEWED_PENDING,
  GET_HOTEL_RECENTLY_VIEWED_SUCCESS,
  GET_SEARCH_HOTEL,
  GET_SEARCH_HOTEL_FAILED,
  GET_SEARCH_HOTEL_PENDING,
  GET_SEARCH_HOTEL_SUCCESS,
} from "../definitions/hotelDefine";

const tokenState = (state) => state.user.accessToken;
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

// Watcher: Decrease Counter
export function* watchHotelListSaga() {
  // Take Last Action Only
  yield takeLatest(GET_HOTEL_RECENTLY_VIEWED, getHotelViewed);
  yield takeLatest(GET_SEARCH_HOTEL, getSearchHotel);
}
