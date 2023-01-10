import { createSlice } from "@reduxjs/toolkit";

export type navState = {
  homeIsActive: boolean;
  mapIsActive: boolean;
  addIsActive: boolean;
  userIsActive: boolean;
};

const initialState: navState = {
  homeIsActive: false,
  mapIsActive: false,
  addIsActive: false,
  userIsActive: false,
};

export const navSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    goHome(state) {
      state.homeIsActive = true;
      state.mapIsActive = false;
      state.addIsActive = false;
      state.userIsActive = false;
    },
    goMap(state) {
      state.homeIsActive = false;
      state.mapIsActive = true;
      state.addIsActive = false;
      state.userIsActive = false;
    },
    goAdd(state) {
      state.homeIsActive = false;
      state.mapIsActive = false;
      state.addIsActive = true;
      state.userIsActive = false;
    },
    goUser(state) {
      state.homeIsActive = false;
      state.mapIsActive = false;
      state.addIsActive = false;
      state.userIsActive = true;
    },
  },
});

export const navActions = navSlice.actions;

export default navSlice;
