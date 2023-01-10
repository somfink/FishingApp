import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBrwXhisounkb-vjbaJYLuEwIRUHfM_xqU",
  authDomain: "fishing-app-61eb9.firebaseapp.com",
  projectId: "fishing-app-61eb9",
  storageBucket: "fishing-app-61eb9.appspot.com",
  messagingSenderId: "889306487182",
  appId: "1:889306487182:web:8cf1f39f02ac9f5d5dacdf",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
