import {
  LOGIN_REQUEST,
  LOGIN_SCREEN,
  LOGOUT_REQUEST,
  GET_HOTEL_LIKE,
  SET_HOTEL_LIKE,
} from "../definitions/userDefine";

export function loginRequest(params) {
  return {
    type: LOGIN_REQUEST,
    params: params,
  };
}
export function loginScreen(params) {
  return {
    type: LOGIN_SCREEN,
    params: params,
  };
}
export function logoutRequest() {
  return {
    type: LOGOUT_REQUEST,
  };
}
export function getHotelLike() {
  return {
    type: GET_HOTEL_LIKE,
  };
}
export function setHotelLike(hotelID) {
  return {
    type: SET_HOTEL_LIKE,
    params: hotelID,
  };
}
