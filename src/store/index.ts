import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./nav/nav.slice";

const store = configureStore({ reducer: { nav: navSlice.reducer } });

export default store;
