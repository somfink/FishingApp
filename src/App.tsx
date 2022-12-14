import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createdAccountActions } from "./store/createdAccount/createdAccount.slice";
import { landingActions } from "./store/landing-page/landingPage.slice";
import { rootState } from "./helpers/types";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./helpers/firbase.config";
import { fetchDataActions } from "./store/fetchData/fetchData.slice";
import { useLocation } from "react-router";

import { AppContainer } from "./App.styles";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const { isLandingActive } = useSelector(
    (state: rootState) => state.landingPage
  );

  const dispatch = useDispatch();
  const location = useLocation();
  const dataCollectionRef = collection(db, "spots");

  useEffect(() => {
    onSnapshot(dataCollectionRef, (snapshot) => {
      const fetchGeo = snapshot.docs.map(
        (doc: { id: string; data: () => any }) => {
          return {
            id: doc.id,
            lat: doc.data().geo._lat,
            lng: doc.data().geo._long,
          };
        }
      );
      dispatch(fetchDataActions.fetchStart(fetchGeo));
    });
  }, []);

  const isNavNotShow =
    location.pathname === "/" ||
    location.pathname === "/login-user" ||
    location.pathname === "/sign-user";

  useEffect(() => {
    if (isNavNotShow) {
      dispatch(landingActions.showLanding());
    } else {
      dispatch(landingActions.closeLanding());
    }
  }, [location.pathname]);

  return (
    <AppContainer>
      <Header />
      {!isLandingActive && <Navbar />}
    </AppContainer>
  );
}

export default App;
