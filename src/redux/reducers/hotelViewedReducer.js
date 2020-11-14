import {
    GET_HOTEL_RECENTLY_VIEWED_PENDING,
    GET_HOTEL_RECENTLY_VIEWED_SUCCESS,
    GET_HOTEL_RECENTLY_VIEWED_FAILED,
} from "../definitions/hotelDefine";

// Initial State
const initialState = {
  isPending: false,
  hotelViewed: null,
};
// Redux: Counter Reducer
const hotelRecentlyViewedReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOTEL_RECENTLY_VIEWED_SUCCESS: {
      return {
        ...state,
        isPending: false,
        hotelViewed: action.data,
      };
    }
    case GET_HOTEL_RECENTLY_VIEWED_PENDING: {
      return {
        ...state,
        isPending: true,
        // hotelViewed: null,
      };
    }
    case GET_HOTEL_RECENTLY_VIEWED_FAILED: {
      return {
        ...state,
        isPending: false,
        // hotelViewed: null,
      };
    }
    default: {
      return state;
    }
  }
};
// Exports
export default hotelRecentlyViewedReducer;
