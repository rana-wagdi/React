import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
};
const authSlice = createSlice({
  name: "athentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
export const authAction = authSlice.actions;
export default authSlice.reducer;
