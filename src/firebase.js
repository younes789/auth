// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALUYbjuGr4IsUCSopW-SpxJ9KUD_Ftl1w",
  authDomain: "fir-auth-f536a.firebaseapp.com",
  projectId: "fir-auth-f536a",
  storageBucket: "fir-auth-f536a.appspot.com",
  messagingSenderId: "160258941479",
  appId: "1:160258941479:web:91bc76c18d45a268782402",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
