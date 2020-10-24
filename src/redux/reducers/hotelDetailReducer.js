import {
  GET_HOTEL_DETAIL_FAILED,
  GET_HOTEL_DETAIL_PENDING,
  GET_HOTEL_DETAIL_SUCCESS,
} from "../definitions/hotelDefine";

// Initial State
const initialState = {
  isPending: false,
  hotelDetail: null,
};
// Redux: Counter Reducer
const hotelDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOTEL_DETAIL_SUCCESS: {
      return {
        ...state,
        isPending: false,
        hotelDetail: action.data,
      };
    }
    case GET_HOTEL_DETAIL_PENDING: {
      return {
        ...state,
        isPending: true,
        hotelDetail: null,
      };
    }
    case GET_HOTEL_DETAIL_FAILED: {
      return {
        ...state,
        isPending: false,
        hotelDetail: null,
      };
    }
    default: {
      return state;
    }
  }
};
// Exports
export default hotelDetailReducer;
