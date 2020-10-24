// Imports: Dependencies
import { all, fork } from "redux-saga/effects";
// Imports: Redux Sagas
import { watchHotelDetail } from "./hotelDetailSaga";
// Redux Saga: Root Saga
import { watchHotelSearching } from "./hotelSearchingSaga";

export function* rootSaga() {
  yield all([fork(watchHotelDetail), fork(watchHotelSearching)]);
}
