import { signInWithEmailAndPassword } from "firebase/auth";
import {
  signInWithGooglePopUp,
  createUserDoc,
  validateAuthUserWithEmailAndPaswsword,
} from "../../utils/firebase/firebase.utils";

import { Button } from "../button/button.component";
import { FormInput } from "../form-input/form-input.component";
import { useState } from "react";

import "./sign-in-form.styles.scss";

const userLoginInfo = {
  email: "",
  password: "",
};

export function SignInForm() {
  const GooglePopupAccess = async () => {
    const { user } = await signInWithGooglePopUp();
    createUserDoc(user);
  };
  const [formFields, setFormFields] = useState(userLoginInfo);
  const { email, password } = formFields;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await validateAuthUserWithEmailAndPaswsword(email, password);
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-credential":
          alert("Email or password is invalid");
          break;
        default:
          console.log(error);
      }
    }
  };
  return (
    <div className="sign-in-container">
      <h1>SignIn</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          inputOptions={{
            type: "email",
            onChange: handleChange,
            name: "email",
            value: email,
            required: true,
          }}
        />
        <FormInput
          label="Password"
          inputOptions={{
            type: "password",
            onChange: handleChange,
            name: "password",
            value: password,
            required: true,
          }}
        />
        <div className="buttons-container">
          <Button text="SIGN IN" type="submit" />
          <Button
            type="button"
            text="GOOGLE SIGN IN"
            buttonType="google"
            onClick={GooglePopupAccess}
          />
        </div>
      </form>
    </div>
  );
}
