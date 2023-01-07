import { UserAuth } from "../store/authUser/authUser.slice";
import { AccountCreated } from "../store/createdAccount/createdAccount.slice";
import { landingState } from "../store/landing-page/landingPage.slice";
import { loginState } from "../store/loginCheck/loginCheck.slice";
import { navState } from "../store/nav/nav.slice";

export type Cords = {
  lat?: number;
  lng?: number;
  id?: string;
};

export type fetchState = {
  markers: Cords[];
};

export type rootState = {
  nav: navState;
  landingPage: landingState;
  fetchData: fetchState;
  loginStatus: loginState;
  authUser: UserAuth;
  createAccount: AccountCreated;
};
