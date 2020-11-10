import {
  GET_HOTEL_DETAIL_FAILED,
  GET_HOTEL_DETAIL_PENDING,
  GET_HOTEL_DETAIL_SUCCESS,
} from "../definitions/hotelDefine";
import { LOGGING_SUCCESS, LOGIN_SCREEN, LOGOUT_REQUEST } from "../definitions/userDefine";

// Initial State
const initialState = {
  isLogin: false,
  userProfile: null,
  accessToken: null,
  loginScreen: true
};
// Redux: Counter Reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGING_SUCCESS: {
      return {
        ...state,
        isLogin: true,
        userProfile: action.data.user,
        accessToken: action.data.access_token,
        loginScreen: false
      };
    }
    case LOGIN_SCREEN: {
      return {
        ...state,
        loginScreen: action.params
      }
    }
    case LOGOUT_REQUEST:{
      return initialState
    }
    default: {
      return state;
    }
  }
};
// Exports
export default userReducer;
