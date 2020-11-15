import {
    GET_SEARCH_SUGGESTION_FAILED,
    GET_SEARCH_SUGGESTION_SUCCESS,
    GET_SEARCH_SUGGESTION_PENDING,
    GET_SEARCH_SUGGESTION
} from "../definitions/hotelDefine";

const initialState = {
    isPending: false,
    destinations: null
};

const searchDestinationReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SEARCH_SUGGESTION_SUCCESS:
            {
                // console.log(action)
                return {
                    ...state,
                    isPending: false,
                    destinations: action.destinations,
                };
            }

        case GET_SEARCH_SUGGESTION_FAILED:
            {
                return {
                    ...state,
                    isPending: false,
                    destinations: null,
                };
            }
        case GET_SEARCH_SUGGESTION_PENDING:
            return {
                ...state,
                isPending: true,
                destinations: null,
            };
        default:
            return state;
    }
};
export default searchDestinationReducer;