import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { rootState } from "../../helpers/types";
import { useSelector } from "react-redux";
import { HeaderContainer } from "./Header.styles";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import LoginForm from "../LoginForm/LoginForm";
import Home from "../Pages/Home/Home";
import LandingPage from "../Pages/LandingPage/LandingPage";
import Map from "../Pages/Map/Map";
import NotFound from "../Pages/NotFound/NotFound";
import Profile from "../Pages/Profile/Profile";
import AddSpot from "../Pages/AddSpot/AddSpot";
import SignForm from "../SignForm/SignForm";
import Notification from "../../components/UI/Notification/Notification";
import ProtectedRoute from "../../routers/ProtectedRoute/ProtectedRoute";

const Header = () => {
  const { isAccountCreated, isErrorOccured } = useSelector(
    (state: rootState) => state.createAccount
  );

  return (
    <HeaderContainer>
      {isAccountCreated && (
        <Notification>
          <Alert
            status="success"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="200px"
          >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              Account created!
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              Thanks for creating account in FisshingApp! Now you can use all
              the features of our app.
            </AlertDescription>
          </Alert>
        </Notification>
      )}
      {isErrorOccured && (
        <Notification>
          <Alert status="error">
            <AlertIcon />
            There was an error processing your request
          </Alert>
        </Notification>
      )}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login-user" element={<LoginForm />} />
        <Route path="/sign-user" element={<SignForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/add-spot" element={<AddSpot />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </HeaderContainer>
  );
};

export default Header;
