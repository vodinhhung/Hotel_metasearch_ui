import { delay, takeEvery, takeLatest, put } from "redux-saga/effects";
import { getSearchHotelByFilter } from "@api/hotel";
import {
    GET_SEARCH_HOTEL_BY_FILTER,
    GET_SEARCH_HOTEL_BY_FILTER_FAILED,
    GET_SEARCH_HOTEL_BY_FILTER_SUCCESS,
    GET_SEARCH_HOTEL_BY_FILTER_PENDING,
} from "../definitions/hotelDefine";

function* getHotelByFilter(params) {
    console.log(params);
    try {

        const hotelSearch = yield getSearchHotelByFilter(params);
        console.log(hotelSearch.data);
        yield put({
            type: GET_SEARCH_HOTEL_BY_FILTER_SUCCESS,
            receivedHotels: hotelSearch.data,
        });
    } catch (e) {
        yield put({ type: GET_SEARCH_HOTEL_BY_FILTER_FAILED, e });
    }
}

export function* watchHotelSearchingByFilterSaga() {
    // Take Last Action Only
    yield takeLatest(GET_SEARCH_HOTEL_BY_FILTER, getHotelByFilter);
}