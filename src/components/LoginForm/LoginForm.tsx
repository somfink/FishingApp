import { ChangeEvent } from "react";
import {
  FormLogin,
  LoginBackground,
  LoginInfo,
  LoginParagraph,
  LoginTitle,
  SignLink,
} from "./LoginForm.styles";
import useInput from "../../hooks/use-input";
import FormButton from "../UI/Button/FormButton";
import Input from "../UI/Input/Input";
import Modal from "../UI/Modal/Modal";
import { ErrorText } from "../SignForm/SignForm.styles";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../helpers/firbase.config";
import { authUserActions } from "../../store/authUser/authUser.slice";
import { rootState } from "../../helpers/types";

const LoginForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: rootState) => state.authUser);

  const {
    value: enteredLogin,
    hasError: loginHasError,
    isValid: loginIsValid,
    valueChangeHandler: loginChangeHandler,
    inputBlurHandler: loginBlurHandler,
    reset: loginInputReset,
  } = useInput((val: string) => val.trim() !== "");

  const {
    value: enteredPassword,
    hasError: passwordHasError,
    isValid: passwordIsValid,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: passwordInputReset,
  } = useInput((val: string) => val.trim().length >= 8);

  let formIsValid = false;

  if (loginIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const submitLoginFormHandler = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!loginIsValid || !passwordIsValid) {
      return;
    } else {
      signInWithEmailAndPassword(auth, enteredLogin, enteredPassword)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(authUserActions.login(user));
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }

    console.log(enteredLogin);
    console.log(enteredPassword);
    console.log(user);

    loginInputReset();
    passwordInputReset();
  };

  return (
    <Modal>
      <LoginBackground />
      <LoginTitle>Login</LoginTitle>
      <FormLogin onSubmit={submitLoginFormHandler}>
        <Input
          type="text"
          placeholder="Login"
          onChange={loginChangeHandler}
          onBlur={loginBlurHandler}
          hasError={loginHasError}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
          hasError={passwordHasError}
        />
        <FormButton isValid={formIsValid}>Log in</FormButton>
      </FormLogin>
      <LoginInfo>
        {loginHasError && <ErrorText>Login must not be empty!</ErrorText>}
        {passwordHasError && (
          <ErrorText>Password length should be min 8 characters!</ErrorText>
        )}
      </LoginInfo>
      <LoginParagraph>
        Don't have an account? <SignLink to="/sign-user">Sign Up</SignLink>
      </LoginParagraph>
    </Modal>
  );
};

export default LoginForm;
