import { HelperContainerCenter, Span } from "../../../helpers/main.styles";
import {
  ProfileAvatar,
  ProfileContainer,
  ProfileInfo,
  ProfileParagraph,
} from "./Profile.styles";
import ProfileMenu from "./ProfileMenu/ProfileMenu";

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileInfo>
        <HelperContainerCenter>
          <ProfileAvatar src="./images/avatar.jpg" alt="profile photo" />
        </HelperContainerCenter>
        <HelperContainerCenter>
          <ProfileParagraph>
            Spots: 15 <Span>|</Span> User: somfink
          </ProfileParagraph>
        </HelperContainerCenter>
      </ProfileInfo>
      <ProfileMenu />
    </ProfileContainer>
  );
};

export default Profile;
