import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "./helpers/types";
import { AppContainer } from "./App.styles";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./helpers/firbase.config";
import { fetchDataActions } from "./store/fetchData/fetchData.slice";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import "./App.styles.ts";
import { landingActions } from "./store/landing-page/landingPage.slice";
import { useLocation } from "react-router";

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
  }, []);

  return (
    <AppContainer>
      <Header />
      {/* {isAccountCreated && (
        <Alert
          status="success"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="200px"
          position={"absolute"}
          zIndex={20}
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            Account created!
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            Thanks for creating account in FisshingApp! Now you can use all the
            features of our app.
          </AlertDescription>
        </Alert>
      )} */}
      {!isLandingActive && <Navbar />}
    </AppContainer>
  );
}

export default App;
