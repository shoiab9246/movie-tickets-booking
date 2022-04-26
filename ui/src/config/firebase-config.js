import firebase from "firebase/compat/app";

const firebaseConfig = {
    apiKey: "AIzaSyAkKWpbc1YFd9dWrtzrXYRhf6sxOoniJaE",
    authDomain: "sample-project-11733.firebaseapp.com",
    projectId: "sample-project-11733",
    storageBucket: "sample-project-11733.appspot.com",
    messagingSenderId: "715631377056",
    appId: "1:715631377056:web:ff55cbe5d646dbc3a3e7c5",
    measurementId: "G-392WSTR1VV"
  };

firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export default firebase;
