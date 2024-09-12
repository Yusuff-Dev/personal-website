import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0Hd74fRrl6MDQwv3OlSiIPB0U7VlluHw",
  authDomain: "portfolio-11270.firebaseapp.com",
  projectId: "portfolio-11270",
  storageBucket: "portfolio-11270.appspot.com",
  messagingSenderId: "773733798267",
  appId: "1:773733798267:web:d1b52d6c65f17870f4adde",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
