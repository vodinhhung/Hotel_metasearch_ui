// Imports: Dependencies
import { delay, takeEvery, takeLatest, put } from "redux-saga/effects";
// Worker: Increase Counter Async (Delayed By 4 Seconds)
function* increaseCounterAsync() {
  try {
    // Delay 4 Seconds
    yield delay(4000);
    // Dispatch Action To Redux Store
    yield put({
      type: "INCREASE_COUNTER_ASYNC",
      value: 1,
    });
  } catch (error) {
    console.log(error);
  }
}
// Watcher: Increase Counter Async
export function* watchIncreaseCounter() {
  // Take Last Action Only
  yield takeLatest("INCREASE_COUNTER", increaseCounterAsync);
}
// Worker: Decrease Counter
function* decreaseCounter() {
  try {
    // Dispatch Action To Redux Store
    yield put({
      type: "DECREASE_COUNTER_ASYNC",
      value: 1,
    });
  } catch (error) {
    console.log(error);
  }
}
// Watcher: Decrease Counter
export function* watchDecreaseCounter() {
  // Take Last Action Only
  yield takeLatest("DECREASE_COUNTER", decreaseCounter);
}
