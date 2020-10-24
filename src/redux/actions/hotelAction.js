import { GET_HOTEL_DETAIL, GET_SEARCH_HOTEL } from "../definitions/hotelDefine";

export function getSearchHotelAction(params) {
    return {
        type: GET_SEARCH_HOTEL,
        params: params
    }
}
export function getHotelDetailAction(hotelID) {
    return {
        type: GET_HOTEL_DETAIL,
        id: hotelID
    }
}