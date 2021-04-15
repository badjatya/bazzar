import firebase from 'firebase/app'
import "firebase/firestore"
import "firebase/auth"

const config = {
    apiKey: "AIzaSyC3EeN00TTWJxyoMF3tjTC35e-eYCKSnUM",
    authDomain: "bazzar-b19de.firebaseapp.com",
    projectId: "bazzar-b19de",
    storageBucket: "bazzar-b19de.appspot.com",
    messagingSenderId: "186535351681",
    appId: "1:186535351681:web:16ba522fd7ba746c9b4480",
    measurementId: "G-LLDSTSDBFX"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
