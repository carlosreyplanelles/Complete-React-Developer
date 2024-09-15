import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUJXx-1MLH2Obc3cs8BXB_0d3Xxzw4XB8",
  authDomain: "crwn-clothing-db-6964c.firebaseapp.com",
  projectId: "crwn-clothing-db-6964c",
  storageBucket: "crwn-clothing-db-6964c.appspot.com",
  messagingSenderId: "260449982135",
  appId: "1:260449982135:web:710a329ce38fddf4bedf32",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize googleAuth
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDoc = async (userAuth, additionalInfo = {}) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userDocData = await getDoc(userDocRef);

  if (!userDocData.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPaswsword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
