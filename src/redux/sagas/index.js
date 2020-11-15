// Imports: Dependencies
import { all, fork } from "redux-saga/effects";
// Imports: Redux Sagas
import { watchHotelSaga } from "./hotelSaga";
// Redux Saga: Root Saga
import { watchHotelListSaga } from "./hotelListSaga";
import { watchUserSaga } from "./userSaga";
import { watchHotelSearchingByFilterSaga } from "./hotelSearchingByFilterSaga";

export function* rootSaga() {
  yield all([
    fork(watchHotelSaga),
    fork(watchHotelListSaga),
    fork(watchUserSaga),
    fork(watchHotelSearchingByFilterSaga)
  ]);
}
