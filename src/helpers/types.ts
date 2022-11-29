import { landingState } from "../store/landing-page/landingPage.slice";
import { navState } from "../store/nav/nav.slice";


export type rootState = {
    nav: navState;
    landingPage: landingState;
};

