// Imports: Dependencies
import { combineReducers } from "redux";
// Imports: Reducers
import hotelDetailReducer from "./hotelDetailReducer";
import hotelSearchingReducer from "./hotelSearchingReducer";
import hotelSearchingByFilterReducer from "./hotelSearchingByFilterReducer";
import userReducer from "./userReducer";
// Redux: Root Reducer
const rootReducer = combineReducers({
    hotelDetail: hotelDetailReducer,
    hotelSearching: hotelSearchingReducer,
    user: userReducer,
    hotelSearchingByFilter: hotelSearchingByFilterReducer
});
// Exports
export default rootReducer;