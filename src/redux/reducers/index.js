// Imports: Dependencies
import { combineReducers } from "redux";
// Imports: Reducers
import hotelDetailReducer from "./hotelDetailReducer";
import hotelSearchingReducer from "./hotelSearchingReducer";
// Redux: Root Reducer
const rootReducer = combineReducers({
  hotelDetail: hotelDetailReducer,
  hotelSearching: hotelSearchingReducer,
  
  
});
// Exports
export default rootReducer;
