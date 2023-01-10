import styled from "styled-components";

export const LoginProvider = styled.section`
  width: 90%;
  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #f3f3f3;
  border-radius: 30px;
  border: 10px solid #585858;
  padding: 5rem .5rem;
`;

export const GoToLoginBtn = styled.button`
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  color: #fd9800;
  background: #0d2d72;
  border-radius: 20px;
  box-shadow: 3px 3px 15px #000000c9;
  margin-bottom: 2rem;

  &:hover {
    cursor: pointer;
  }
`;

export const LoginParagraph = styled.p`
  width: 90%;
  font-size: 1.2rem;
  color: #000000;
  font-weight: 600;
  text-align: ${(props: {textAlign?: string}) => props.textAlign ? props.textAlign : "justify"};
  margin-bottom: 2rem;
  letter-spacing: 2px;
`;
