import styled, { css, keyframes } from "styled-components";
import {
  HiUser,
  HiHome,
  HiMapPin,
} from "react-icons/hi2";
import { IoFishSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

// ANIMATIONS

const unactiveTile = keyframes`
  0% {
    transform: translate(0,0);
    opacity: 1;
  }

  30% {
    opacity: 1;
  }

  100% {
    transform: translate(100%,0);
    opacity: 0;
  }
`;

const activeTile = keyframes`
  0% {
    transform: translate(80%,0);
    opacity: 0;
  }

  30% {
    opacity: 0;
  }

  100% {
    transform: translate(0,0);
    opacity: 1;
  }
`;

//  STYLES

export const NavContainer = styled.nav`
  width: 100%;
  height: 5rem;
  background-color: #3d3d3d;
  border-radius: 25px 25px 0 0;
  border: 2px solid #1f1e1e;
  background: #1f1e1e;
  position: fixed;
  left: 0px;
  bottom: 0px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 25%;
  padding: 1rem;
  border-radius: 30px;
`;

export const StyledNavLink = styled(NavLink)<{ $active: boolean }>`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.$active ? "#f3f3f3" : "#2683a8")};

  & > span {
    display: ${(props) => (props.$active ? "block" : "none")};
    opacity: ${(props) => (props.$active ? 1 : 0)};
    animation: ${(props) => (props.$active ? activeTile : unactiveTile)} 0.5s;
    color: #f3f3f3;
    font-size: 1.2rem;
    font-weight: 600;
  }

  &:hover {
    cursor: pointer;
  }
`;

const iconStyle = css`
  font-size: 2rem;
  font-weight: bold;
`;

export const HomeIcon = styled(HiHome)`
  ${iconStyle}
`;

export const MapIcon = styled(HiMapPin)`
  ${iconStyle}
`;

export const AddSpotIcon = styled(IoFishSharp)`
  ${iconStyle}
`;

export const UserIcon = styled(HiUser)`
  ${iconStyle}
`;
