import firebase from "../config/firebase-config";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const socialMediaAuth = (provider) => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
      return res.user;
    })
    .catch((err) => {
      return err;
    });
};

export default socialMediaAuth;
