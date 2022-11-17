import { HomeIcon, MapIcon, NavContainer, NavItems, NavList, SearchIcon, UserIcon } from "./Navbar.styles";


const Navbar = () => {
  return (
    <NavContainer>
      <NavList>
        <NavItems>
          <HomeIcon />
        </NavItems>
        <NavItems>
          <MapIcon />
        </NavItems>
        <NavItems>
          <SearchIcon />
        </NavItems>
        <NavItems>
          <UserIcon />
        </NavItems>
      </NavList>
    </NavContainer>
  );
};

export default Navbar;
