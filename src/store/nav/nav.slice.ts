import { createSlice } from "@reduxjs/toolkit";

export type navState = {
  homeIsActive: boolean;
  mapIsActive: boolean;
  searchIsActive: boolean;
  userIsActive: boolean;
};

const initialState: navState = {
  homeIsActive: true,
  mapIsActive: false,
  searchIsActive: false,
  userIsActive: false,
};

export const navSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    goHome(state) {
      state.homeIsActive = true;
      state.mapIsActive = false;
      state.searchIsActive = false;
      state.userIsActive = false;
    },
    goMap(state) {
      state.homeIsActive = false;
      state.mapIsActive = true;
      state.searchIsActive = false;
      state.userIsActive = false;
    },
    goSearch(state) {
      state.homeIsActive = false;
      state.mapIsActive = false;
      state.searchIsActive = true;
      state.userIsActive = false;
    },
    goUser(state) {
      state.homeIsActive = false;
      state.mapIsActive = false;
      state.searchIsActive = false;
      state.userIsActive = true;
    },
  },
});

export const navActions = navSlice.actions;

export default navSlice;
