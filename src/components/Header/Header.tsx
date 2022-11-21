import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import LandingPage from "../Pages/LandingPage/LandingPage";
import Map from "../Pages/Map/Map";
import NotFound from "../Pages/NotFound/NotFound";
import Profile from "../Pages/Profile/Profile";
import Search from "../Pages/Search/Search";
import { HeaderContainer } from "./Header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <Routes>
        <Route path="/" element={<LandingPage />} ></Route>
        <Route path="/home" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/search" element={<Search />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HeaderContainer>
  );
};

export default Header;
