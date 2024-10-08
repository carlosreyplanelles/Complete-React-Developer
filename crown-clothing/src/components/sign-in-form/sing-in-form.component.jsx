import {
  signInWithGooglePopUp,
  createUserDoc,
  validateAuthUserWithEmailAndPaswsword,
} from "../../utils/firebase/firebase.utils";

import { Button } from "../button/button.component";
import { FormInput } from "../form-input/form-input.component";
import { useState, useContext } from "react";
import { UserContext } from "../../contexts/user.context";

import "./sign-in-form.styles.scss";

const userLoginInfo = {
  email: "",
  password: "",
};

const defaultValues = {
  email: "",
  password: "",
};

export function SignInForm() {
  const [formFields, setFormFields] = useState(userLoginInfo);
  const { email, password } = formFields;
  const {setCurrentUser} = useContext(UserContext)
  const GooglePopupAccess = async () => {
    const { user } = await signInWithGooglePopUp();
    createUserDoc(user);
  };
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const {user} = await validateAuthUserWithEmailAndPaswsword(email, password);
      setCurrentUser(user);
      setFormFields(defaultValues)
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
