import styled, { css } from "styled-components";
import {
  TbCircle1,
  TbCircle2,
  TbCircle3,
  TbCircle4,
  TbCircle5,
} from "react-icons/tb";
import { Link } from "react-router-dom";

export const LandingTitle = styled.section`
  width: 100%;
  min-height: 40rem;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #d8d8d8;
  text-shadow: 2px 2px 15px #0f0f0f;
  background-color: #3d3d3d;
  clip-path: polygon(0 0, 100% 0%, 100% 90%, 0 100%);
  background-image: url(./images/TitleBG-sm.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 70%;
  z-index: 10;

  &::after {
    content: "";
    display: block;
    width: 100%;
    min-height: 40rem;
    position: absolute;
    background: #00000075;
  }
`;

export const TitleIcon = styled.span`
  z-index: 10;

  & > svg {
    margin-top: 1rem;
    font-size: 3rem;
    color: #d8d8d8;
  }
`;

export const LandingWelcome = styled.section`
  width: 100%;
  min-height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 2rem;
  padding: 2rem 0;
`;

export const LandingDescription = styled.section`
  width: 100%;
  position: relative;
  min-height: 58rem;
  clip-path: polygon(0 7%, 100% 0%, 100% 93%, 0% 100%);
  background-image: url(./images/LandingDesc.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  &::after {
    content: "";
    display: block;
    width: 100%;
    min-height: 58rem;
    position: absolute;
    background: #00000075;
  }
`;

export const Handler = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 10rem;

  & > h1 {
    margin-top: 3rem;
    z-index: 15;
  }

  &:last-child {
    margin-bottom: 4rem;
  }
`;

export const Slogan = styled.p`
  color: #d8d8d8;
  font-size: 1.3rem;
  font-style: italic;
  font-weight: bold;
  letter-spacing: 2px;
  text-shadow: 5px 5px 15px #0f0f0f;
  padding: 0 1.5rem;
  margin-bottom: 5rem;
  z-index: 15;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  z-index: 10;
  margin-top: 5rem;
`;

const iconStyle = css`
  font-size: 4rem;
  color: #d8d8d8;
`;

export const First = styled(TbCircle1)`
  ${iconStyle};
`;

export const Second = styled(TbCircle2)`
  ${iconStyle};
`;

export const Third = styled(TbCircle3)`
  ${iconStyle};
`;

export const Fourtf = styled(TbCircle4)`
  ${iconStyle};
`;

export const Fifth = styled(TbCircle5)`
  ${iconStyle};
`;

export const UnderlineParagraph = styled.p`
  color: #d8d8d8;
  width: 100%;
  text-align: center;
  font-size: 1.3rem;
  font-style: italic;
  letter-spacing: 2px;
  padding: 0 1.5rem;
  margin-top: 1.5rem;
`;

export const JoinSection = styled.section`
  width: 100%;
  min-height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: -4rem;
  padding: 4.5rem 0;
`;

const buttonStyles = css`
  margin-top: 1rem;
  font-size: 1.8rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background: transparent;
  transition: 0.3s;
  z-index: 10;
  text-decoration: none;

  &:focus-visible {
    outline: none;
    border: 2px solid #d8d8d8;
    color: #d8d8d8;
  }
`;

export const SignBtn = styled(Link)`
  ${buttonStyles}

  border: 2px solid #7fa1ce;
  color: #7fa1ce;

  &:hover {
    cursor: pointer;
    border: 2px solid #2683a8;
    color: #d8d8d8;
  }
`;

export const LoginBtn = styled(Link)`
  ${buttonStyles}

  border: 2px solid #d8d8d8;
  color: #d8d8d8;
  margin-bottom: 2rem;

  &:hover {
    cursor: pointer;
    border: 2px solid #e2a9a9;
    color: #e2a9a9;
  }
`;
