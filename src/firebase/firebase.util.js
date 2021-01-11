import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Let firebase knows that our application is connected to firebase account and database
const config = {
    apiKey: "AIzaSyBk4j5pzItxgT8SDHrQim_mMVBYwFovzM4",
    authDomain: "crwn-db-hyang77.firebaseapp.com",
    projectId: "crwn-db-hyang77",
    storageBucket: "crwn-db-hyang77.appspot.com",
    messagingSenderId: "721566699930",
    appId: "1:721566699930:web:b90c96f5f2c8ad5196aa23",
    measurementId: "G-V6FGY4L4XL"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Set up google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;