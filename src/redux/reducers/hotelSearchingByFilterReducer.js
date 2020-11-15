import {
  GET_SEARCH_HOTEL_BY_FILTER,
  GET_SEARCH_HOTEL_BY_FILTER_SUCCESS,
  GET_SEARCH_HOTEL_BY_FILTER_FAILED,
} from "../definitions/hotelDefine";

const initialState = {
  isPending: false,
  searchHotels: null,
};

const hotelSearchingByFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH_HOTEL_BY_FILTER_SUCCESS:
      return {
        ...state,
        isPending: true,
        searchHotels: action.receivedHotels,
      };
    case GET_SEARCH_HOTEL_BY_FILTER_FAILED:
      return {
        ...state,
        isPending: false,
        searchHotels: null,
      };
    default:
      return state;
  }
};

export default hotelSearchingByFilterReducer;
