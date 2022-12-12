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

const ProfileMenu = () => {
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
        <LogoutHandler>
          <LogoutIcon />
          Logout
        </LogoutHandler>
      </LogoutContainer>
    </ProfileOptions>
  );
};

export default ProfileMenu;
