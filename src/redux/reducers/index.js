// Imports: Dependencies
import { combineReducers } from "redux";
// Imports: Reducers
import hotelDetailReducer from "./hotelDetailReducer";
import hotelSearchingReducer from "./hotelSearchingReducer";
import userReducer from "./userReducer";
// Redux: Root Reducer
const rootReducer = combineReducers({
  hotelDetail: hotelDetailReducer,
  hotelSearching: hotelSearchingReducer,
  user: userReducer
});
// Exports
export default rootReducer;
