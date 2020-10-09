// Initial State
const initialState = {
  counter: 0,
};
// Redux: Counter Reducer
const hotelSearchingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_COUNTER_ASYNC": {
      return {
        ...state,
        counter: state.counter + action.value,
      };
    }
    case "DECREASE_COUNTER": {
      return {
        ...state,
        counter: state.counter - action.value,
      };
    }
    default: {
      return state;
    }
  }
};
// Exports
export default hotelSearchingReducer;
