import {
  GET_HOTEL_DETAIL,
  GET_HOTEL_RECENTLY_VIEWED,
  GET_SEARCH_HOTEL_BY_FILTER,
  GET_SEARCH_HOTEL_BY_FILTER_SUCCESS,
  GET_SEARCH_HOTEL_BY_FILTER_FAILED,
  GET_SEARCH_SUGGESTION,
  GET_SEARCH_SUGGESTION_SUCCESS,
  GET_SEARCH_SUGGESTION_FAILED,
  GET_SEARCH_SUGGESTION_PENDING,
  SET_SEARCH_HOTEL_BY_FILTER,
} from "../definitions/hotelDefine";

export function getHotelDetailAction(hotel) {
  return {
    type: GET_HOTEL_DETAIL,
    hotel,
  };
}
export function getHotelViewed() {
  return {
    type: GET_HOTEL_RECENTLY_VIEWED,
  };
}
// Search by Filter
export function getSearchHotelByFilter(params) {
  return {
    type: GET_SEARCH_HOTEL_BY_FILTER,
    params,
  };
}

//Action send by Redux-saga

//Search Suggestion
export function getSearchSuggestion(destination) {
  return {
    type: GET_SEARCH_SUGGESTION,
    destination: destination,
  };
}
export function setSearchParams(params) {
  return {
    type: SET_SEARCH_HOTEL_BY_FILTER,
    params,
  };
}
