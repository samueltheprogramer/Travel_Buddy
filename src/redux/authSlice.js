import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userAuth: false,
  },
  reducers: {
    login: (state) => {
      state.userAuth = true;
    },
    logout: (state) => {
      state.userAuth = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
