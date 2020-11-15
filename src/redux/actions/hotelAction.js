import { GET_HOTEL_DETAIL, GET_SEARCH_HOTEL, GET_SEARCH_HOTEL_BY_FILTER, GET_SEARCH_HOTEL_BY_FILTER_SUCCESS, GET_SEARCH_HOTEL_BY_FILTER_FAILED, GET_SEARCH_SUGGESTION, GET_SEARCH_SUGGESTION_SUCCESS, GET_SEARCH_SUGGESTION_FAILED, GET_SEARCH_SUGGESTION_PENDING } from "../definitions/hotelDefine";
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


// Search by Filter
export function getSearchHotelByFilter(hotel) {
    return {
        type: GET_SEARCH_HOTEL_BY_FILTER,
        hotel: hotel
    }
}

//Action send by Redux-saga

export function getSearchHotelByFilterSuccess(receivedHotels) {
    return {
        type: GET_SEARCH_HOTEL_BY_FILTER_SUCCESS,
        receivedHotels
    }
}

export function getSearchHotelByFilterFailed(error) {
    return {
        type: GET_SEARCH_HOTEL_BY_FILTER_FAILED,
        error
    }
}

//Search Suggestion
export function getSearchSuggestion(text){
    return {
        type: GET_SEARCH_SUGGESTION,
        text: text
    }
}

//ACtion suggestion 
export function getSearchSuggestionSuccess(){
    
}