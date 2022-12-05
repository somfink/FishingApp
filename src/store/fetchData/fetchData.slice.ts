import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  markers: [],
};

const fetchDataSlice = createSlice({
  name: "fetch-coordinate",
  initialState,
  reducers: {
    fetchStart(state, action) {
      state.markers = action.payload;
    },
  },
});

export const fetchDataActions = fetchDataSlice.actions;

export default fetchDataSlice;
