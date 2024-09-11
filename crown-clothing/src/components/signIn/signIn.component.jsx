import {signInWithGooglePopUp, createUserDoc} from '../../utils/firebase/firebase.utils'

export default function SignIn() {

  const GoogleAuthProvider = async () => {
    const {user }= await signInWithGooglePopUp();
    createUserDoc(user);
  }

  return (
    <div>
      <h1>SignIn</h1>
      <button onClick={GoogleAuthProvider}>Login with Google</button>
    </div>
  )
}