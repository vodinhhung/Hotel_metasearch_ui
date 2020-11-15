// Imports: Dependencies
import { all, fork } from "redux-saga/effects";
// Imports: Redux Sagas
import { watchHotelDetailSaga } from "./hotelDetailSaga";
// Redux Saga: Root Saga
import { watchHotelSearchingSaga } from "./hotelSearchingSaga";
import { watchUserSaga } from "./userSaga";
import { watchHotelSearchingByFilterSaga } from "./hotelSearchingByFilterSaga";

export function* rootSaga() {
    yield all([
        fork(watchHotelDetailSaga),
        fork(watchHotelSearchingSaga),
        fork(watchUserSaga),
        fork(watchHotelSearchingByFilterSaga)
    ]);
}