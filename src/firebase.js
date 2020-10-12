import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA91aftsLRCwxi_4dV74bWeokPdAoxdZ0s",
    authDomain: "tinder-clone-f089c.firebaseapp.com",
    databaseURL: "https://tinder-clone-f089c.firebaseio.com",
    projectId: "tinder-clone-f089c",
    storageBucket: "tinder-clone-f089c.appspot.com",
    messagingSenderId: "411664817952",
    appId: "1:411664817952:web:02627919d74832c5980145",
    measurementId: "G-Q903N56JCZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;