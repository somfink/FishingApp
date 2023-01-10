import { useEffect, useState } from "react";
import { auth } from "../helpers/firbase.config";
import { onAuthStateChanged, User } from "firebase/auth";
import firebase from "firebase/app";

const useAuth = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
  }, []);

  return { currentUser };
};

export default useAuth;
