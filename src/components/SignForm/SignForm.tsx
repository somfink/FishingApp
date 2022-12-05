import { ChangeEvent } from "react";
import useInput from "../../hooks/use-input";
import FormButton from "../UI/Button/FormButton";
import Input from "../UI/Input/Input";
import Modal from "../UI/Modal/Modal";
import {
  ErrorText,
  FormSign,
  MainSignContainer,
  SignBackground,
  SignTitle,
} from "./SignForm.styles";

const emailRegExp = new RegExp(
  "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
);

const SignForm = () => {
  const {
    value: enteredLogin,
    hasError: loginHasError,
    isValid: loginIsValid,
    valueChangeHandler: loginChangeHandler,
    inputBlurHandler: loginBlurHandler,
    reset: loginInputReset,
  } = useInput((val: string) => val.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailHasError,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailInputReset,
  } = useInput((val: string) => emailRegExp.test(val));

  const {
    value: enteredPassword,
    hasError: passwordHasError,
    isValid: passwordIsValid,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: passwordInputReset,
  } = useInput((val: string) => val.trim().length >= 8);
  
  let formIsValid = false;

  if (loginIsValid && emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const submitSignFormHandler = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!loginIsValid || !emailIsValid || !passwordIsValid) {
      return;
    }

    console.log(enteredLogin);
    console.log(enteredEmail);
    console.log(enteredPassword);

    loginInputReset();
    emailInputReset();
    passwordInputReset();
  };

  return (
    <Modal>
      <MainSignContainer>
        <SignBackground />
        <SignTitle>Create Account</SignTitle>
      </MainSignContainer>
      <FormSign onSubmit={submitSignFormHandler}>
        <Input
          type="text"
          placeholder="Login"
          onChange={loginChangeHandler}
          onBlur={loginBlurHandler}
          hasError={loginHasError}
        />
        <Input
          type="email"
          placeholder="Email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          hasError={emailHasError}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={passwordChangeHandler}
          hasError={passwordHasError}
          onBlur={passwordBlurHandler}
        />
        <FormButton>Sign Up</FormButton>
      </FormSign>
      {loginHasError && <ErrorText>Login must not be empty!</ErrorText>}
      {emailHasError && <ErrorText>Please enter correct email!</ErrorText>}
      {passwordHasError && (
        <ErrorText>Password length should be min 8 characters!</ErrorText>
      )}
    </Modal>
  );
};

export default SignForm;
