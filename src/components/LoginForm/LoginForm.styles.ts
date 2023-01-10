import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginBackground = styled.div`
  width: 100%;
  min-height: 18rem;
  position: relative;
  clip-path: polygon(0 0%, 100% 0%, 100% 85%, 0% 100%);
  background-image: url(./images/login-img-sm.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &::after {
    content: "";
    display: block;
    width: 100%;
    min-height: 18rem;
    position: absolute;
    background: #00000075;
  }
`;

export const LoginTitle = styled.h2`
  margin-top: 3rem;
  font-size: 2.5rem;
  color: #d8d8d8a1;
  font-weight: 600;
  letter-spacing: 2px;
`;

export const FormLogin = styled.form`
  width: 100%;
  height: clamp(25rem, 30rem, 35rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginParagraph = styled.p`
  margin: 1.5rem auto;
  text-transform: uppercase;
  color: #d8d8d8a1;
  font-size: 0.9rem;
  letter-spacing: 1px;
`;

export const SignLink = styled(Link)`
  text-transform: uppercase;
  color: #7fa1ce;
  font-weight: 600;
  text-decoration: none;
  font-size: 0.9rem;
  letter-spacing: 1px;
`;

export const LoginInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 8rem;
`;
