import styled from "styled-components";

export const LandingTitle = styled.section`
  width: 100%;
  min-height: 30rem;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #2683a8;
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
    min-height: 30rem;
    position: absolute;
    background: #00000075;
  }
`;

export const TitleIcon = styled.span`
  z-index: 20;
  position: absolute;
  top: 5.5rem;

  & > svg {
    margin-top: 0.5rem;
    font-size: 3rem;
    color: #287a9b;
  }
`;

export const LandingWelcome = styled.section`
  width: 100%;
  min-height: 22rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 2rem;
`;

export const LandingDescription = styled.section`
  width: 100%;
  position: relative;
  min-height: 50rem;
  clip-path: polygon(0 10%, 100% 0%, 100% 100%, 0 100%);
  background-image: url(./images/LandingDesc.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &::after {
    content: "";
    min-height: 50rem;
    width: 100%;
    display: block;
    width: 100%;
    position: absolute;
    background: #00000075;
  }
`;

export const Handler = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: fit-content;

  & > h1 {
    margin-top: 2rem;
    z-index: 15;
  }
`;

export const Slogan = styled.p`
  color: #2683a8;
  font-size: 1.3rem;
  font-style: italic;
  font-weight: bold;
  letter-spacing: 2px;
  text-shadow: 2px 2px 15px #0f0f0f;
  padding: 0 1.5rem;
  margin-bottom: 5rem;
  z-index: 15;
`;
