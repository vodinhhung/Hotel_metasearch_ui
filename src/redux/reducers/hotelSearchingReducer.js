import {
  GET_SEARCH_HOTEL_FAILED,
  GET_SEARCH_HOTEL_PENDING,
  GET_SEARCH_HOTEL_SUCCESS,
} from "../definitions/hotelDefine";

// Initial State
const initialState = {
  isPending: false,
  searchHotels: null
};
// Redux: Counter Reducer
const hotelSearchingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH_HOTEL_SUCCESS: {
      return {
        ...state,
        isPending: false,
        searchHotels: action.data,
      };
    }
    case GET_SEARCH_HOTEL_PENDING: {
      return {
        ...state,
        isPending: true,
        searchHotels: null,
      };
    }
    case GET_SEARCH_HOTEL_FAILED: {
      return {
        ...state,
        isPending: false,
        searchHotels: null,
      };
    }
    default: {
      return state;
    }
  }
};
// Exports
export default hotelSearchingReducer;
