// Imports: Dependencies
import { combineReducers } from "redux";
// Imports: Reducers
import hotelDetailReducer from "./hotelDetailReducer";
import hotelLikeReducer from "./hotelLike";
import hotelRecentlyViewed from "./hotelViewedReducer";
import userReducer from "./userReducer";
import hotelSearchingByFilterReducer from "./hotelSearchingByFilterReducer";
import searchDestinationReducer from "./searchDestinationReducer";

// Redux: Root Reducer
const rootReducer = combineReducers({
  hotelDetail: hotelDetailReducer,
  user: userReducer,
  hotelLike: hotelLikeReducer,
  hotelViewed: hotelRecentlyViewed,
  hotelSearchingByFilter: hotelSearchingByFilterReducer,
  searchDestination: searchDestinationReducer
});
// Exports
export default rootReducer;
