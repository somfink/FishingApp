import { createSlice } from "@reduxjs/toolkit";

export type UserAuth = {
  currentUser: {
    email?: string;
    userName?: string;
    uid?: string;
  };
};

const initialState = {
  currentUser: { email: null, userName: null, uid: null },
};

const authUserSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.currentUser = {
        email: action.payload.email,
        userName: action.payload.userName,
        uid: action.payload.uid,
      };
    },
    logout(state) {
      state.currentUser = {
        email: null,
        userName: null,
        uid: null,
      };
    },
  },
});

export const authUserActions = authUserSlice.actions;

export default authUserSlice;
