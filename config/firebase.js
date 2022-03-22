// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmhem9jMWhpDtBy89WWPPY0DWXNc4o1GE",
  authDomain: "mastergames-28b87.firebaseapp.com",
  projectId: "mastergames-28b87",
  storageBucket: "mastergames-28b87.appspot.com",
  messagingSenderId: "770760065357",
  appId: "1:770760065357:web:728fcdf7c2c1a3f12a7704",
  measurementId: "G-JPM11QMPLV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

// export logout function

