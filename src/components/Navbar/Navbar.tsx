import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../helpers/types";
import { navActions } from "../../store/nav/nav.slice";
import {
  HomeIcon,
  MapIcon,
  NavContainer,
  NavItems,
  NavList,
  SearchIcon,
  StyledNavLink,
  UserIcon,
} from "./Navbar.styles";

const Navbar = () => {
  const dispatch = useDispatch();
  const nav = useSelector((state: rootState) => state.nav);
  const { homeIsActive, mapIsActive, searchIsActive, userIsActive } = nav;

  const goHomeHandler = () => {
    dispatch(navActions.goHome());
  };

  const goMapHandler = () => {
    dispatch(navActions.goMap());
  };

  const goSearchHandler = () => {
    dispatch(navActions.goSearch());
  };

  const goUserHandler = () => {
    dispatch(navActions.goUser());
  };

  return (
    <NavContainer>
      <NavList>
        <NavItems onClick={goHomeHandler}>
          <StyledNavLink $active={homeIsActive} to="/home">
            <HomeIcon />
            <span>Home</span>
          </StyledNavLink>
        </NavItems>
        <NavItems onClick={goMapHandler}>
          <StyledNavLink $active={mapIsActive} to="/map">
            <MapIcon />
            <span>Map</span>
          </StyledNavLink>
        </NavItems>
        <NavItems onClick={goSearchHandler}>
          <StyledNavLink $active={searchIsActive} to="/search">
            <SearchIcon />
            <span>Search</span>
          </StyledNavLink>
        </NavItems>
        <NavItems onClick={goUserHandler}>
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
