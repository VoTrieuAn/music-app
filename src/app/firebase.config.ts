// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfio1bakCDgVr37dqUFJVWafSag1xCFMM",
  authDomain: "music-app-92013.firebaseapp.com",
  databaseURL: "https://music-app-92013-default-rtdb.firebaseio.com",
  projectId: "music-app-92013",
  storageBucket: "music-app-92013.firebasestorage.app",
  messagingSenderId: "217103873494",
  appId: "1:217103873494:web:97d47b9167920bbb71a077"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dbFirebase = getDatabase(app);

