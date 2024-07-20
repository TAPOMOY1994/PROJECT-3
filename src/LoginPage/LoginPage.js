import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth, provider } from '../Googlesignin/config'; // Import Firebase config
import { signInWithPopup } from 'firebase/auth';
import "./LoginPage.css";

export default function LoginPage() {
  const [user, setUser] = useState(null);
  const history = useHistory(); // Initialize history

  // Function to handle manual Facebook login
  const handleFacebookLogin = () => {
    // Add your Facebook login logic here
    // For now, just navigating to HeaderArea
    history.push('/HeaderArea');
  };

  // Function to handle Google Sign-In
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user); // Save user info in state
        // Optionally, navigate or show a message if needed
      })
      .catch((error) => {
        console.error('Error signing in with Google: ', error);
      });
  };

  return (
    <div className="Login">
      <div className="facebook">
        <div className="facebooktext">facebook</div>
        <div className="title">
          Facebook helps you connect and share with the people in your life.
        </div>
      </div>
      <div className="loginContainer">
        <div className="logindetail">
          <input type="email" placeholder="Email address or phone number" />
          <br />
          <input type="password" placeholder="Password" />
          <br />
          <button className="btn" onClick={handleFacebookLogin}>Log in with Facebook</button>

          <div className="forget">
            <a href="/forgot-password">Forgotten password?</a>
            <br />
          </div>
        </div>
        <div className="create">
          <br />
          <button className="btns">Create new account</button>
        </div>
        <br />
        {!user && ( // Only show the Google Sign-In button if the user is not signed in
          <div className="google-signin">
            <button className="btn-google" onClick={signInWithGoogle}>
              Sign in with Google
            </button>
          </div>
        )}
        {user && (
          <div className="user-info">
            <img src={user.photoURL} alt={user.displayName} className="user-photo" />
            <h3>{user.displayName}</h3>
            <p>{user.email}</p>
          </div>
        )}
        <div className="page">
          <a href="/create-page">Create a Page</a> for a celebrity, brand, or business.
        </div>
      </div>
    </div>
  );
}
