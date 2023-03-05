import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state) {
      if (state.counter === 0) {
        alert("value is 0 ");
      } else {
        state.counter--;
      }
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// const store = createStore(counterSlice.reducer);

const initialAuthState = {
  isAuthenticated: false,
};
const authSlice = createSlice({
  name: "athentivation",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
      alert("heeey !!!!");
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: {
     counter: counterSlice.reducer,
      auth: authSlice.reducer },
});
export const counterAction = counterSlice.actions;
export const authAction = authSlice.actions;
export default store;

// const createReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//     // return state // never do that never mutate the state
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     if (state.counter === 0) {
//       alert("raana");
//     } else {
//       return {
//         counter: state.counter - 1,
//         showCounter: state.showCounter,
//       };
//     }
//   }
//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }
//   return state;
// };

// const store = createStore(createReducer);

// export default store;
