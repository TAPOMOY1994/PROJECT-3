import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth, provider } from './config';
import { signInWithPopup } from 'firebase/auth';
import "./SignIn.css";

const SignIn = () => {
  const [user, setUser] = useState(null);
  const history = useHistory(); // Initialize history

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user); // Save user info in state
        history.push('/LoginPage'); // Navigate to the login page
      })
      .catch((error) => {
        console.error('Error signing in with Google: ', error);
      });
  };

  return (
    <div className="sign-in-container">
      {!user ? (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      ) : (
        <div className="user-info">
          <img src={user.photoURL} alt={user.displayName} />
          <h3>{user.displayName}</h3>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
};

export default SignIn;
