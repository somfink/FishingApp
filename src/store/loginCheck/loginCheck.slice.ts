import { createSlice } from "@reduxjs/toolkit";

export type loginState = {
  isLoggedin: boolean;
}

const initialState = {
  isLoggedin: false,
};

const userLoginStatusSlice = createSlice({
  name: "check-user-login",
  initialState,
  reducers: {
    toggleLoginStatus(state) {
      state.isLoggedin = !state.isLoggedin;
    },
  },
});

export const userLoginStatusActions = userLoginStatusSlice.actions;

export default userLoginStatusSlice;
