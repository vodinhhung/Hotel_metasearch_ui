import { delay, takeEvery, takeLatest, put } from "redux-saga/effects";
import { getDestinationsInput } from "@api/hotel"
import {
    GET_SEARCH_SUGGESTION,
    GET_SEARCH_SUGGESTION_SUCCESS,
    GET_SEARCH_SUGGESTION_FAILED,
    GET_SEARCH_SUGGESTION_PENDING
} from "../definitions/hotelDefine";

function* getDestinationsSaga(params) {
    // const destination = yield getDestinationsInput(params);
    // console.log(destination);
    // console.log(destination);
    try {
        const destination = yield getDestinationsInput(params);
        yield put({
            type: GET_SEARCH_SUGGESTION_SUCCESS,
            destinations: destination.data,
        });
    } catch (error) {
        console.log(error);
        yield put({
            type: GET_SEARCH_SUGGESTION_FAILED,
            message: error,
        });
    }
}

export function* watchDestinationsSaga() {
    // Take Last Action Only
    yield takeLatest(GET_SEARCH_SUGGESTION, getDestinationsSaga);
}