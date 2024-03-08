// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4W5BGbEL2j04o6gscEiOnczGGUAp-Cw4",
  authDomain: "web-of-the-dragon.firebaseapp.com",
  projectId: "web-of-the-dragon",
  storageBucket: "web-of-the-dragon.appspot.com",
  messagingSenderId: "849212856035",
  appId: "1:849212856035:web:bae6f34e2f37b72c3917d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;