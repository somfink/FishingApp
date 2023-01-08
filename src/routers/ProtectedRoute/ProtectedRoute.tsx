import { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/use-auth";
import {
  GoToLoginBtn,
  LoginParagraph,
  LoginProvider,
} from "./ProtectedRoute.styles";

type Props = {
  children: ReactNode;
};

const ProtectedRoute: FC<Props> = ({ children }) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const navigateHandler = (navPage: string) => {
    navigate(navPage);
  };

  return currentUser ? (
    <>{children}</>
  ) : (
    <LoginProvider>
      <LoginParagraph>
        If you are not logged user you can't see profile section. Click one of
        below buttons to login or sign up
      </LoginParagraph>
      <GoToLoginBtn onClick={() => navigateHandler("/login-user")}>
        Login
      </GoToLoginBtn>
      <LoginParagraph textAlign={"center"}>or</LoginParagraph>
      <GoToLoginBtn onClick={() => navigateHandler("/sign-user")}>
        Signup
      </GoToLoginBtn>
    </LoginProvider>
  );
};

export default ProtectedRoute;
