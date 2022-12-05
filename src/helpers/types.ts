import { landingState } from "../store/landing-page/landingPage.slice";
import { navState } from "../store/nav/nav.slice";

export type Cords = {
  lat?: number;
  lng?: number;
  id?: string;
};

export type FetchState = {
  markers: Cords[];
};

export type rootState = {
  nav: navState;
  landingPage: landingState;
  fetchData: FetchState;
};
