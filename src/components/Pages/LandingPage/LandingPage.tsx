import { GiBoatFishing } from "react-icons/gi";

import {
  Paragraph,
  PrimaryTitle,
  SecondaryTitle,
} from "../../../helpers/main.styles";
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
} from "./LandingPage.styles";

const LandingPage = () => {
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
        <Paragraph>
          We are sure you will find many well-stocked places with fish here. You
          will no longer have to worry about not catching any fish!
        </Paragraph>
        <Paragraph>
          How You can use our App? It's trivial, below you will find a brief
          description of the functionality!
        </Paragraph>
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
        <Paragraph>
          You can join us for free! If you don't have an account, click the
          register button
        </Paragraph>
        <SignBtn to="/sign-user">Sign Up</SignBtn>
      </JoinSection>
    </Modal>
  );
};

export default LandingPage;
