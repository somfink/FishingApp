import { useSelector } from "react-redux";
import { HelperContainerCenter, Span } from "../../../helpers/main.styles";
import { rootState } from "../../../helpers/types";
import useAuth from "../../../hooks/use-auth";
import ProtectedRoute from "../../../routers/ProtectedRoute/ProtectedRoute";
import {
  ProfileAvatar,
  ProfileContainer,
  ProfileInfo,
  ProfileParagraph,
} from "./Profile.styles";
import ProfileMenu from "./ProfileMenu/ProfileMenu";

const userIcon = "./images/avatar.png";

const Profile = () => {
  const { currentUser } = useAuth();

  return (
    <ProfileContainer>
      <ProtectedRoute>
        <ProfileInfo>
          <HelperContainerCenter>
            <ProfileAvatar
              src={userIcon}
              alt="profile photo"
            />
          </HelperContainerCenter>
          <HelperContainerCenter>
            <ProfileParagraph>
              Spots: 15 <Span>|</Span> User:{currentUser ? ` ${currentUser?.displayName}` : ''}
            </ProfileParagraph>
          </HelperContainerCenter>
        </ProfileInfo>
        <ProfileMenu />
      </ProtectedRoute>
    </ProfileContainer>
  );
};

export default Profile;
