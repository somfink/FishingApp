import { PrimaryTitle } from "../../helpers/main.styles";
import FormButton from "../UI/Button/FormButton";
import Input from "../UI/Input/Input";
import Modal from "../UI/Modal/Modal";
import {
  FormLogin,
  LoginBackground,
  LoginParagraph,
  LoginTitle,
  SignLink,
} from "./LoginForm.styles";

const LoginForm = () => {
  return (
    <Modal>
      <LoginBackground />
      <LoginTitle>Login</LoginTitle>
      <FormLogin>
        <Input type="text" placeholder="Login" />
        <Input type="password" placeholder="Password" />
        <FormButton>Log in</FormButton>
      </FormLogin>
      <LoginParagraph>
        Don't have an account? <SignLink to="/sign-user">Sign Up</SignLink>
      </LoginParagraph>
    </Modal>
  );
};

export default LoginForm;
