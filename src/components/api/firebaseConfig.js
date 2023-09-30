import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9-jj0jJUCp0wqcg2fVZttNCrODBrf4Nc",
  authDomain: "jarvis-web-be0c3.firebaseapp.com",
  projectId: "jarvis-web-be0c3",
  storageBucket: "jarvis-web-be0c3.appspot.com",
  messagingSenderId: "584130299165",
  appId: "1:584130299165:web:c0b6d25409898492a0cdf4",
  measurementId: "G-H3EX23X35Q"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)