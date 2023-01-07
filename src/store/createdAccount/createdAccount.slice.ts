import { createSlice } from "@reduxjs/toolkit";
import React from "react";

export type AccountCreated = {
  isAccountCreated: boolean;
  isErrorOccured: boolean;
};

const initialState = {
  isAccountCreated: false,
  isErrorOccured: true,
};

const createdAccountSlice = createSlice({
  name: "created-account",
  initialState,
  reducers: {
    createAccount(state) {
      state.isAccountCreated = !state.isAccountCreated;
    },
    errorWhenCreateAccount(state) {
      state.isErrorOccured = !state.isErrorOccured;
    },
  },
});

export const createdAccountActions = createdAccountSlice.actions;

export default createdAccountSlice;
