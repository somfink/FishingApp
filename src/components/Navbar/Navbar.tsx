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
        <NavItems active={homeIsActive} onClick={goHomeHandler}>
          <HomeIcon active={homeIsActive} />
          <span>Home</span>
        </NavItems>
        <NavItems active={mapIsActive} onClick={goMapHandler}>
          <MapIcon active={mapIsActive} />
          <span>Map</span>
        </NavItems>
        <NavItems active={searchIsActive} onClick={goSearchHandler}>
          <SearchIcon active={searchIsActive} />
          <span>Search</span>
        </NavItems>
        <NavItems active={userIsActive} onClick={goUserHandler}>
          <UserIcon active={userIsActive} />
          <span>Profile</span>
        </NavItems>
      </NavList>
    </NavContainer>
  );
};

export default Navbar;
