import { Paragraph } from './../../../helpers/main.styles';
import styled from "styled-components";

export const ProfileContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileInfo = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: radial-gradient(
    circle,
    rgba(168, 122, 199, 1) 29%,
    rgba(131, 106, 148, 1) 53%,
    rgba(80, 17, 122, 1) 90%
  );
  border-radius: 0 0 30px 30px;
  box-shadow: 2px 2px 15px #000000c2;
`;

export const ProfileAvatar = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  border: 4px solid #f3f3f3;
`;

export const ProfileParagraph = styled(Paragraph)`
  letter-spacing: 1px;
  font-weight: 600;
`;
