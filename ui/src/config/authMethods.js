import firebase from "./firebase-config";
import "firebase/compat/auth"
import "firebase/compat/firestore"

export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
