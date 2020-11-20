// Imports: Dependencies
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import AsyncStorage from "@react-native-community/async-storage";

// Imports: Redux Root Reducer
import rootReducer from "../reducers/index";
// Imports: Redux Root Saga
import { rootSaga } from "../sagas/index";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();
// Redux: Store
let store = null;

if (__DEV__) {
  store = createStore(
    persistedReducer,
    composeWithDevTools(
      applyMiddleware(
        sagaMiddleware
        //  createLogger()
      )
    )
  );
} else {
  store = createStore(
    persistedReducer,
    applyMiddleware(
      sagaMiddleware
      //  createLogger()
    )
  );
}

let persistor = persistStore(store);
// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);
// Exports

export { store, persistor };
