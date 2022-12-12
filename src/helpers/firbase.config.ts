import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrwXhisounkb-vjbaJYLuEwIRUHfM_xqU",
  authDomain: "fishing-app-61eb9.firebaseapp.com",
  projectId: "fishing-app-61eb9",
  storageBucket: "fishing-app-61eb9.appspot.com",
  messagingSenderId: "889306487182",
  appId: "1:889306487182:web:8cf1f39f02ac9f5d5dacdf",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
