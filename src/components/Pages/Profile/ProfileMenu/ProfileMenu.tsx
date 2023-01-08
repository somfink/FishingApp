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
import { signOut } from "firebase/auth";
import { auth } from "../../../../helpers/firbase.config";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ProfileMenu = () => {
  const navigate = useNavigate();

  const toast = useToast({
    position: "top",
    isClosable: true,
    containerStyle: {
      width: "90%",
    },
  });

  const userLogoutHandler = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        toast({
          title: "Logged out",
          status: "success",
        });
      })
      .catch((err) => {
        toast({
          title: err.message,
          status: "error",
        });
      });
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
