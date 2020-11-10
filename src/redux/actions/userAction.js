import {
  LOGIN_REQUEST,
  LOGIN_SCREEN,
  LOGOUT_REQUEST,
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
