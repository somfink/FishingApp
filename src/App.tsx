import { useSelector } from "react-redux";
import { rootState } from "./helpers/types";
import { AppContainer } from "./App.styles";
import "./App.styles.ts";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const { isLandingActive } = useSelector(
    (state: rootState) => state.landingPage
  );
  return (
    <AppContainer>
      <Header />
      {!isLandingActive && <Navbar />}
    </AppContainer>
  );
}

export default App;
