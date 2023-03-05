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