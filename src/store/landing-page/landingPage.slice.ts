import { createSlice } from "@reduxjs/toolkit";

export type landingState = {
  isLandingActive: boolean;
};

const initialState: landingState = {
  isLandingActive: true,
};

const landingSlice = createSlice({
  name: "landing-page",
  initialState,
  reducers: {
    closeLanding(state) {
      state.isLandingActive = false;
    },
    showLanding(state) {
      state.isLandingActive = true;
    },
  },
});

export const landingActions = landingSlice.actions;

export default landingSlice;
