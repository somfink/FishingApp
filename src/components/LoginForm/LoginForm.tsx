import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../helpers/types";
import { ErrorText } from "../SignForm/SignForm.styles";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../helpers/firbase.config";
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
import { useToast } from "@chakra-ui/react";

const emailRegExp = new RegExp(
  "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
);

const LoginForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const user = useSelector((state: rootState) => state.authUser);

  const navigate = useNavigate();
  const toast = useToast({
    position: "top",
    isClosable: true,
    containerStyle: {
      width: "90%",
    },
  });

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

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const submitLoginFormHandler = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!emailIsValid || !passwordIsValid) {
      return;
    } else {
      setLoading(true);

      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          enteredEmail,
          enteredPassword
        );
        const user = userCredential.user;
        console.log(user);
        setLoading(false);
        navigate("/home");
        toast({
          title: "Login was successful!",
          status: "success",
        });
      } catch (error) {
        setLoading(false);
        toast({
          title: "Login failed!",
          status: "error",
        });
      }
    }
    emailInputReset();
    passwordInputReset();
  };

  return (
    <Modal>
      <LoginBackground />
      <LoginTitle>Login</LoginTitle>
      <FormLogin onSubmit={submitLoginFormHandler}>
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
          onBlur={passwordBlurHandler}
          hasError={passwordHasError}
        />
        <FormButton isValid={formIsValid}>Log in</FormButton>
      </FormLogin>
      <LoginInfo>
        {emailHasError && <ErrorText>Please enter correct email!</ErrorText>}
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
