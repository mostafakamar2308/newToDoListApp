// Import the functions you need from the SDKs you need
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import logoutIcon from "/src/images/logout.png";
import { createUserImage } from "/src/index";
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
  let userImg = document.createElement("img");
  userImg.id = "user";
  userImg.setAttribute("referrerpolicy", "no-referrer");
  userImg.src = user.photoURL;
  document.querySelector(".user-profile").appendChild(userImg);
  userImg.addEventListener("click", function () {
    logoutbtn();
  });
  hideAllIcons();
}
export function hideAllIcons() {
  document
    .querySelector(".user-profile")
    .firstChild.parentNode.removeChild(
      document.querySelector(".user-profile").firstChild
    );
  document
    .querySelector("#google-login")
    .parentNode.removeChild(document.querySelector("#google-login"));
}
export function logoutbtn() {
  if (!document.querySelector(".logout")) {
    let exit = document.createElement("img");
    exit.src = logoutIcon;
    exit.classList.add("logout");
    document.querySelector(".user-profile").append(exit);
    let clientWidth = window.innerWidth;
    if (clientWidth < 425) {
      gsap.from(".logout", { duration: 0.8, x: 800 });
    } else {
      gsap.from(".logout", { duration: 0.8, y: 800 });
    }
    exit.addEventListener("click", function () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          document
            .querySelector(".user-profile")
            .parentNode.removeChild(document.querySelector(".user-profile"));
          createUserImage(document.querySelector("header"));
        });
    });
  } else {
    document
      .querySelector(".logout")
      .parentNode.removeChild(document.querySelector(".logout"));
  }
}
