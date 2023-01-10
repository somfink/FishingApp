import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { rootState } from "../../helpers/types";
import { navActions } from "../../store/nav/nav.slice";
import {
  AddSpotIcon,
  HomeIcon,
  MapIcon,
  NavContainer,
  NavItems,
  NavList,
  StyledNavLink,
  UserIcon,
} from "./Navbar.styles";

const Navbar = () => {
  const { homeIsActive, mapIsActive, addIsActive, userIsActive } =
  useSelector((state: rootState) => state.nav);
  
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.pathname === "/home") {
      dispatch(navActions.goHome());
    }
    if (location.pathname === "/map") {
      dispatch(navActions.goMap());
    }
    if (location.pathname === "/add-spot") {
      dispatch(navActions.goAdd());
    }
    if (location.pathname === "/profile") {
      dispatch(navActions.goUser());
    }
  }, [location.pathname]);

  return (
    <NavContainer>
      <NavList>
        <NavItems>
          <StyledNavLink $active={homeIsActive} to="/home">
            <HomeIcon />
            <span>Home</span>
          </StyledNavLink>
        </NavItems>
        <NavItems>
          <StyledNavLink $active={mapIsActive} to="/map">
            <MapIcon />
            <span>Spots</span>
          </StyledNavLink>
        </NavItems>
        <NavItems>
          <StyledNavLink $active={addIsActive} to="/add-spot">
            <AddSpotIcon />
            <span>Add</span>
          </StyledNavLink>
        </NavItems>
        <NavItems>
          <StyledNavLink $active={userIsActive} to="/profile">
            <UserIcon />
            <span>Profile</span>
          </StyledNavLink>
        </NavItems>
      </NavList>
    </NavContainer>
  );
};

export default Navbar;
