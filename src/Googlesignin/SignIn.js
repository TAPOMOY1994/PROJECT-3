import React from 'react';
import { auth, provider } from './config';
import { signInWithPopup } from 'firebase/auth';
import "./SignIn.css";

const SignIn = () => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user); // Do something with the user information
      })
      .catch((error) => {
        console.error('Error signing in with Google: ', error);
      });
  };

  return (
    <div>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;
