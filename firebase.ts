import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB_fR780Q2YFPGSh-IUAjLhx8SbzpmWq0Q",
  authDomain: "explore-my-city-12ea0.firebaseapp.com",
  projectId: "explore-my-city-12ea0",
  storageBucket: "explore-my-city-12ea0.appspot.com",
  messagingSenderId: "1064832054433",
  appId: "1:1064832054433:web:b0010acc0b59312f1c6ce0",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
