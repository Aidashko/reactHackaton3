import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA6wraTlfilJoL4yDnkrjL2Ft3f4liTsaE",
    authDomain: "hackaton-35aa7.firebaseapp.com",
    projectId: "hackaton-35aa7",
    storageBucket: "hackaton-35aa7.appspot.com",
    messagingSenderId: "561323031552",
    appId: "1:561323031552:web:ba5ecd7acf71b5f4b22ce5",
    measurementId: "G-VXBK0ZQ7JG"
  };

  const fire = firebase.initializeApp(firebaseConfig);

export default fire;