import styled from "styled-components";

export const HomeContainer = styled.section`
  width: 100%;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const HomeHeader = styled.div`
  display: flex;
  width: 100%;
  height: 18rem;
  clip-path: circle(85% at 40% -10%);
  background-image: url(./images/HomeBG-sm.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 80% 0%;

  &::after {
    content: "";
    display: block;
    width: 100%;
    min-height: 18rem;
    position: absolute;
    background: #0000005e;
  }
`;

export const HomeHeading = styled.h1`
    width: 100%;
    padding: 2rem;
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 2px;
    color: #f3f3f3;
    z-index: 10;
`;
