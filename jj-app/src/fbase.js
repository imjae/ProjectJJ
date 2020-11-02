// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDGjwGDRGTZXEjep_MKnKwp4SKylk1ZkUM",
  authDomain: "project-jj-a8968.firebaseapp.com",
  databaseURL: "https://project-jj-a8968.firebaseio.com",
  projectId: "project-jj-a8968",
  storageBucket: "project-jj-a8968.appspot.com",
  messagingSenderId: "452036057503",
  appId: "1:452036057503:web:47960d7394ab0c04db05aa",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
