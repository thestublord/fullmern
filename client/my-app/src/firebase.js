import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  appId: "YOUR_APP_ID",
  messagingSenderId: "YOUR_SENDER_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // Added = here
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
