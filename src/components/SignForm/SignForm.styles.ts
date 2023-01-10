import styled from "styled-components";

export const MainSignContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(168, 202, 207, 1) 5%,
    rgba(96, 165, 181, 1) 48%,
    rgba(74, 110, 170, 1) 96%
  );
`;

export const SignTitle = styled.h2`
  font-size: 2.5rem;
  margin-top: 3rem;
  color: #000000;
`;

export const SignBackground = styled.div`
  width: 100%;
  height: 13rem;
  background-image: url(./images/sign-background.png);
  background-size: cover;
  background-position: center;
`;

export const FormSignContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: #3d3d3d;
  box-shadow: 0px -5px 20px #3d3d3d;
`;

export const FormSign = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
`;

export const ErrorContainer = styled.div`
  width: 100%;
  min-height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const ErrorText = styled.p`
  width: 80%;
  color: #963434;
  padding: 0.2rem;
  font-size: 1.1rem;
  font-weight: 600;
`;
