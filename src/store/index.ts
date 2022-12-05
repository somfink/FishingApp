import { configureStore } from "@reduxjs/toolkit";
import fetchDataSlice from "./fetchData/fetchData.slice";
import landingSlice from "./landing-page/landingPage.slice";
import navSlice from "./nav/nav.slice";

const store = configureStore({
  reducer: {
    nav: navSlice.reducer,
    landingPage: landingSlice.reducer,
    fetchData: fetchDataSlice.reducer,
  },
});

export default store;
