// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";

const initializationApp = () => {
  initializeApp(firebaseConfig);
};

export default initializationApp;