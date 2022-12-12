import { useEffect } from "react";
import { GiBoatFishing } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  IconSpan,
  ParagraphItalic,
  PrimaryTitle,
  SecondaryTitle,
} from "../../../helpers/main.styles";
import { landingActions } from "../../../store/landing-page/landingPage.slice";
import Modal from "../../UI/Modal/Modal";
import {
  LandingWelcome,
  LandingTitle,
  TitleIcon,
  LandingDescription,
  Handler,
  Slogan,
  DescriptionContainer,
  First,
  Second,
  Third,
  UnderlineParagraph,
  JoinSection,
  SignBtn,
  LoginBtn,
  ContinueBtn,
  ContinueIcon,
} from "./LandingPage.styles";

const LandingPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      dispatch(landingActions.showLanding());
    }
  }, []);

  const moveMainAppHandler = () => {
    dispatch(landingActions.closeLanding());
  };

  return (
    <Modal>
      <LandingTitle>
        <Handler>
          <PrimaryTitle>FishingApp</PrimaryTitle>
          <TitleIcon>
            <GiBoatFishing />
          </TitleIcon>
        </Handler>
        <Handler>
          <LoginBtn to="/login-user">Log in</LoginBtn>
          <Slogan>The best app for anglers!</Slogan>
        </Handler>
      </LandingTitle>
      <LandingWelcome>
        <SecondaryTitle>Welcome in our App!</SecondaryTitle>
        <ParagraphItalic>
          We are sure you will find many well-stocked places with fish here. You
          will no longer have to worry about not catching any fish!
        </ParagraphItalic>
        <ParagraphItalic>
          How You can use our App? It's trivial, below you will find a brief
          description of the functionality!
        </ParagraphItalic>
      </LandingWelcome>
      <LandingDescription>
        <DescriptionContainer>
          <First />
          <UnderlineParagraph>
            You can search for locations of fish shoals marked by users
          </UnderlineParagraph>
        </DescriptionContainer>
        <DescriptionContainer>
          <Second />
          <UnderlineParagraph>
            If you are logged-in user, you can indicate yourself your favorite
            place where the fish shoal is currently located
          </UnderlineParagraph>
        </DescriptionContainer>
        <DescriptionContainer>
          <Third />
          <UnderlineParagraph>
            For logged-in users, you can see your recently added places with a
            description of the catch, which you left
          </UnderlineParagraph>
        </DescriptionContainer>
      </LandingDescription>
      <JoinSection>
        <SecondaryTitle>Want to Join us?</SecondaryTitle>
        <ParagraphItalic>
          You can join us for free! If you don't have an account, click the
          register button
        </ParagraphItalic>
        <SignBtn to="/sign-user">Sign Up</SignBtn>
        <ParagraphItalic>or</ParagraphItalic>
        <ContinueBtn to="/home" onClick={moveMainAppHandler}>
          Conitnue without login
          <IconSpan>
            <ContinueIcon />
          </IconSpan>
        </ContinueBtn>
      </JoinSection>
    </Modal>
  );
};

export default LandingPage;
