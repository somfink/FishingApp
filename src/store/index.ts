import { configureStore } from "@reduxjs/toolkit";
import authUserSlice from "./authUser/authUser.slice";
import fetchDataSlice from "./fetchData/fetchData.slice";
import landingSlice from "./landing-page/landingPage.slice";
import userLoginStatusSlice from "./loginCheck/loginCheck.slice";
import navSlice from "./nav/nav.slice";

const store = configureStore({
  reducer: {
    nav: navSlice.reducer,
    landingPage: landingSlice.reducer,
    fetchData: fetchDataSlice.reducer,
    loginStatus: userLoginStatusSlice.reducer,
    authUser: authUserSlice.reducer,
  },
});

export default store;
