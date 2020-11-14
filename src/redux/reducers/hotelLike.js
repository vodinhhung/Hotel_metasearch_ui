import {
    GET_HOTEL_LIKE_FAILED,
    GET_HOTEL_LIKE_PENDING,
    GET_HOTEL_LIKE_SUCCESS,
  } from "../definitions/userDefine";
  
  // Initial State
  const initialState = {
    isPending: false,
    hotelLike: null
  };
  // Redux: Counter Reducer
  const hotelLikeReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_HOTEL_LIKE_SUCCESS: {
        return {
          ...state,
          isPending: false,
          hotelLike: action.data,
        };
      }
      case GET_HOTEL_LIKE_PENDING: {
        return {
          ...state,
          isPending: true,
          hotelLike: null,
        };
      }
      case GET_HOTEL_LIKE_FAILED: {
        return {
          ...state,
          isPending: false,
          hotelLike: null,
        };
      }
      default: {
        return state;
      }
    }
  };
  // Exports
  export default hotelLikeReducer;
  