import { GET_HOTEL_DETAIL, GET_SEARCH_HOTEL } from "../definitions/hotelDefine";

export function getSearchHotelAction(params) {
    return {
        type: GET_SEARCH_HOTEL,
        params: params
    }
}
export function getHotelDetailAction(hotel) {
    return {
        type: GET_HOTEL_DETAIL,
        hotel
    }
}