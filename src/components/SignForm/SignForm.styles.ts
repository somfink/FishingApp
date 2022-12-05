import styled from "styled-components";

export const MainSignContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: linear-gradient(180deg, rgba(168,202,207,1) 5%, rgba(96,165,181,1) 48%, rgba(74,110,170,1) 96%);
`;

export const SignTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 4rem;
  color: #000000;
`;

export const SignBackground = styled.div`
  width: 100%;
  height: 18rem;
  background-image: url(./images/sign-background.png);
  background-size: cover;
  background-position: center;
`;

export const FormSign = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
  margin-top: -1rem;
  border-radius: 20px 20px 0 0;
  background: #3d3d3d;
  box-shadow: 0px -5px 20px #3d3d3d;
`;

export const ErrorText = styled.p`
  width: 80%;
  color: #963434;
  padding: .2rem;
  font-size: 1.2rem;
  font-weight: 600;
`;
