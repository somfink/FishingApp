import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";
import Home from "../Pages/Home/Home";
import LandingPage from "../Pages/LandingPage/LandingPage";
import Map from "../Pages/Map/Map";
import NotFound from "../Pages/NotFound/NotFound";
import Profile from "../Pages/Profile/Profile";
import Search from "../Pages/Search/Search";
import SignForm from "../SignForm/SignForm";
import { HeaderContainer } from "./Header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login-user" element={<LoginForm />} />
          <Route path="/sign-user" element={<SignForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/add-spot" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </ChakraProvider>
    </HeaderContainer>
  );
};

export default Header;
