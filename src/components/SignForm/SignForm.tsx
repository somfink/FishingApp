import FormButton from "../UI/Button/FormButton";
import Input from "../UI/Input/Input";
import Modal from "../UI/Modal/Modal";
import { FormSign, MainSignContainer, SignBackground, SignTitle } from "./SignForm.styles";

const SignForm = () => {
  return (
    <Modal>
      <MainSignContainer>
          <SignBackground />
          <SignTitle>Create Account</SignTitle>
      </MainSignContainer>
      <FormSign>
        <Input type="text" placeholder="Login" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <FormButton>Sign Up</FormButton>
      </FormSign>
    </Modal>
  );
};

export default SignForm;
