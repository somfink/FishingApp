import styled from "styled-components";
import {
  GrHomeRounded,
  GrMap,
  GrSearch,
  GrUser,
} from "react-icons/gr";

export const NavContainer = styled.nav`
  width: 100%;
  height: 5rem;
  background-color: #3d3d3d;
`;

export const NavList = styled.ul`
  width: 100%;
  height: 100%;
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const NavItems = styled.li`
  
`;

export const HomeIcon = styled(GrHomeRounded)`
  color: #ffffff;
  font-size: 1.5rem;
`;

export const MapIcon = styled(GrMap)`
  color: #ffffff;
  font-size: 1.5rem;
`;

export const SearchIcon = styled(GrSearch)`
  color: #ffffff;
  font-size: 1.5rem;
`;

export const UserIcon = styled(GrUser)`
  color: #ffffff;
  font-size: 1.5rem;
`;
