import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAaA5Ox93UZK7CrzxE2DQCax3srd3jKMSg",
  authDomain: "bazzar-df54b.firebaseapp.com",
  projectId: "bazzar-df54b",
  storageBucket: "bazzar-df54b.appspot.com",
  messagingSenderId: "393348893100",
  appId: "1:393348893100:web:6b2dc9713a25049c60d209",
  measurementId: "G-8B70L35516",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
