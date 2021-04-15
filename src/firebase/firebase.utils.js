import firebase from 'firebase/app'
import "firebase/firestore"
import "firebase/auth"

const config = {
    apiKey: "AIzaSyAyneSnm9AmgaSUZwf6FDu3GfNFsjnemj0",
    authDomain: "bazzar-37b87.firebaseapp.com",
    projectId: "bazzar-37b87",
    storageBucket: "bazzar-37b87.appspot.com",
    messagingSenderId: "100761839335",
    appId: "1:100761839335:web:d55d469e9a0f626e9ea442",
    measurementId: "G-BKPZW9RFVK"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
