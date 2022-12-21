import {
  LogoutContainer,
  LogoutHandler,
  LogoutIcon,
  MyProfileIcon,
  MySpotsIcon,
  ProfileLi,
  ProfileList,
  ProfileOptions,
  SettingsIcon,
  TrophyIcon,
} from "./ProfileMenu.styles";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authUserActions } from "../../../../store/authUser/authUser.slice";
import { rootState } from "../../../../helpers/types";

const ProfileMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: rootState) => state.authUser);

  const userLogoutHandler = () => {
    dispatch(authUserActions.logout());
    console.log(user);
  };

  return (
    <ProfileOptions>
      <ProfileList>
        <ProfileLi>
          <MyProfileIcon />
          My Profile
        </ProfileLi>
        <ProfileLi>
          <MySpotsIcon />
          My Spots
        </ProfileLi>
        <ProfileLi>
          <TrophyIcon />
          Trophies
        </ProfileLi>
        <ProfileLi>
          <SettingsIcon />
          Settings
        </ProfileLi>
      </ProfileList>
      <LogoutContainer>
        <LogoutHandler onClick={userLogoutHandler}>
          <LogoutIcon />
          Logout
        </LogoutHandler>
      </LogoutContainer>
    </ProfileOptions>
  );
};

export default ProfileMenu;
