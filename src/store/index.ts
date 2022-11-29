import { configureStore } from "@reduxjs/toolkit";
import landingSlice from "./landing-page/landingPage.slice";
import navSlice from "./nav/nav.slice";

const store = configureStore({
  reducer: { nav: navSlice.reducer, landingPage: landingSlice.reducer },
});

export default store;
