// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXMdN6Lmp-mM-jJBiEmNS4CZ6XJkLr7CU",
  authDomain: "productive-hero.firebaseapp.com",
  projectId: "productive-hero",
  storageBucket: "productive-hero.appspot.com",
  messagingSenderId: "496986319620",
  appId: "1:496986319620:web:94f446497484b1c2193e51",
  measurementId: "G-N31HS81RL1",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export function googleSignIn(ele) {
  firebase
    .auth()
    .signInWithPopup(ele)
    .then((res) => {
      changePic(res.user);
    })
    .catch((e) => {
      console.log(e);
    });
}
export function changePic(user) {
  document.querySelector(".user-profile").firstChild.src = user.photoURL;
}