import React from "react";
import { AppContainer } from "./App.styles";
import "./App.styles.ts";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <AppContainer>
      <Header />
      <Navbar />
    </AppContainer>
  );
}

export default App;
