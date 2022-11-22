import { GiBoatFishing } from "react-icons/gi";
import { Paragraph, PrimaryTitle, SecondaryTitle } from "../../../helpers/main.styles";
import Modal from "../../UI/Modal";
import { LandingWelcome, LandingTitle, TitleIcon, LandingDescription, Handler, Slogan } from "./LandingPage.styles";

const LandingPage = () => {
  return (
    <Modal>
      <LandingTitle>
        <Handler>
          <PrimaryTitle>FishingApp</PrimaryTitle>
          <TitleIcon><GiBoatFishing/></TitleIcon>
        </Handler>
        <Handler>
          <Slogan>The best app for anglers!</Slogan>
        </Handler>
        {/* The best app for anglers! */}
      </LandingTitle>
      <LandingWelcome>
        <SecondaryTitle>Welcome in our App!</SecondaryTitle>
        <Paragraph>We are sure you will find many well-stocked places with fish here. You will no longer have to worry about not catching any fish!</Paragraph>
        <Paragraph>How You can use our App? It's trivial, below you will find a brief description of the functionality!</Paragraph>
      </LandingWelcome>
      <LandingDescription></LandingDescription>
    </Modal>
  );
};

export default LandingPage;
