import { HelperContainerCenter } from "./../../../../helpers/main.styles";
import {
  IoSettingsOutline,
  IoPersonCircleOutline,
  IoLocationOutline,
  IoLogInOutline,
  IoFishOutline,
} from "react-icons/io5";
import styled, { css } from "styled-components";

export const ProfileOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 55%;
`;

export const ProfileList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  list-style: none;
  width: 100%;
  padding-left: 3rem;
  margin-top: 2rem;
`;

export const ProfileLi = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 1.2rem 0;
  font-size: 1.4rem;
  font-weight: 600;
  color: #f3f3f3;
  letter-spacing: 1px;
  transition: all 0.2s ease-in;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

const profileIconStyle = css`
  font-size: 2rem;
  color: #f3f3f3;
  margin-right: 2rem;
`;

export const MyProfileIcon = styled(IoPersonCircleOutline)`
  ${profileIconStyle};
`;

export const MySpotsIcon = styled(IoLocationOutline)`
  ${profileIconStyle};
`;

export const TrophyIcon = styled(IoFishOutline)`
  ${profileIconStyle};
`;

export const SettingsIcon = styled(IoSettingsOutline)`
  ${profileIconStyle};
`;

export const LogoutContainer = styled(HelperContainerCenter)`
  width: 80%;
  margin-top: 1rem;
  padding: 0.5rem 0;
  font-size: 1.5rem;
  letter-spacing: 1px;
  color: #f3f3f3;
  font-weight: 600;
  border-top: 2px solid #505050;
`;

export const LogoutHandler = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in;

  &:hover {
    cursor: pointer;
    color: #a87ac7ff;
  }
`;

export const LogoutIcon = styled(IoLogInOutline)`
  ${profileIconStyle};
  margin-right: 1rem;
  transition: all 0.2s ease-in;

  ${LogoutHandler}:hover & {
    color: #a87ac7ff;
  }
`;
