import {
  signInWithGooglePopUp,
  createUserDoc,
} from "../../utils/firebase/firebase.utils";

import { getRedirectResult } from "firebase/auth";

import { useEffect } from "react";
import SignUpForm from "../sign-up-form/sign-up-form.component";

export default function SignIn() {
  const GooglePopupAccess = async () => {
    const { user } = await signInWithGooglePopUp();
    const loggedUser = createUserDoc(user);
  };

  return (
    <div>
      <h1>SignIn</h1>
      <button onClick={GooglePopupAccess}>Login with Google Popup</button>
      <SignUpForm />
    </div>
  );
}
