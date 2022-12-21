import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { authUserActions } from "../../store/authUser/authUser.slice";
import {
  ErrorText,
  FormSign,
  MainSignContainer,
  SignBackground,
  SignTitle,
} from "./SignForm.styles";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";
import { auth, storage, db } from "../../helpers/firbase.config";
import { toast } from "react-toastify";
import FormButton from "../UI/Button/FormButton";
import Input from "../UI/Input/Input";
import Modal from "../UI/Modal/Modal";
import useInput from "../../hooks/use-input";
import { FirebaseApp } from "firebase/app";
import { useNavigate } from "react-router-dom";

const emailRegExp = new RegExp(
  "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
);

const SignForm = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

  const signup = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!loginIsValid || !emailIsValid || !passwordIsValid) {
      setLoading(false);
      return;
    } else {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          enteredEmail,
          enteredPassword
        );

        const user = userCredential.user;

        // update user profile

        await updateProfile(user, {
          displayName: enteredLogin,
        });

        //store user data in firestore db

        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          displayName: enteredLogin,
          email: enteredEmail,
        });
        await console.log(user);
        setLoading(false);
        toast.success("Your registration was successful!");
        navigate("/login-user");
      } catch (error) {
        setLoading(false);
        toast.error("something went wrong");
      }
    }

    loginInputReset();
    emailInputReset();
    passwordInputReset();
  };

  let formIsValid = false;

  if (loginIsValid && emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  return (
    <Modal>
      <MainSignContainer>
        <SignBackground />
        <SignTitle>Create Account</SignTitle>
      </MainSignContainer>
      <FormSign onSubmit={signup}>
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
        <FormButton isValid={formIsValid}>Sign Up</FormButton>
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
