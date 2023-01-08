import { createSlice } from "@reduxjs/toolkit";

export type UserAuth = {
  currentUser: {
    email?: string;
    userName?: string;
    uid?: string;
    photoURL?: string;
  };
};

const initialState = {
  currentUser: {
    email: null,
    userName: null,
    uid: null,
    photoURL: null,
  },
};

const authUserSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      const { email, userName, uid, photoURL } = action.payload;
      state.currentUser = {
        email,
        userName,
        uid,
        photoURL,
      };
    },
    logout(state) {
      state.currentUser = {
        email: null,
        userName: null,
        uid: null,
        photoURL: null,
      };
    },
  },
});

export const authUserActions = authUserSlice.actions;

export default authUserSlice;
