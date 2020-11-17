import {
  GET_SEARCH_HOTEL_BY_FILTER_SUCCESS,
  GET_SEARCH_HOTEL_BY_FILTER_FAILED,
  GET_SEARCH_HOTEL_BY_FILTER_PENDING,
  SET_SEARCH_HOTEL_BY_FILTER,
} from "../definitions/hotelDefine";

const initialState = {
  isPending: false,
  searchHotels: null,
  params: {
    destination: null,
    star: null,
    priceFrom: null,
    priceTo: null,
    dateFrom: null,
    dateTo: null,
    facility: null,
    page: 1,
  },
};

const hotelSearchingByFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_HOTEL_BY_FILTER:
      return {
        ...state,
        params: { ...state.params, ...action.params },
      };
    case GET_SEARCH_HOTEL_BY_FILTER_PENDING:
      return {
        ...state,
        isPending: true,
        searchHotels: null,
      };
    case GET_SEARCH_HOTEL_BY_FILTER_SUCCESS:
      return {
        ...state,
        isPending: false,
        searchHotels: action.data,
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
