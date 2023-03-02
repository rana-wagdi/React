import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };
const createReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "decrement") {
    if (state.counter === 0) {
      alert("raana");
    } else {
      return {
        counter: state.counter - 1,
        showCounter: state.showCounter,
      };    
    }
  }
  if (action.type === "toggle") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }
  return state;
};
const store = createStore(createReducer);

export default store;
