import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import '../style/login.module.css';

const firebaseConfig = {
  apiKey: "AIzaSyDAAjIoZAXI6TgLN-6sjfohi_S1aFWns1I",
  authDomain: "furniture-test-e5917.firebaseapp.com",
  projectId: "furniture-test-e5917",
  storageBucket: "furniture-test-e5917.appspot.com",
  messagingSenderId: "631617571656",
  appId: "1:631617571656:web:a3ba362dcc6ee2ead4417d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Login = () => {
  const [user, setUser] = useState(null);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {user ? (
        <div className='loginBox'>
          <img className="userPhoto" src={user.photoURL} alt="User" />
          <p className='hello'>Привіт, {user.displayName}!</p> 
          <button className="signOutButton" onClick={handleSignOut}>Вийти</button>
        </div>
      ) : (
        <button className="signInButton" onClick={signInWithGoogle}>Увійти за допомогою Google</button>
      )}
    </div>
  );
};

export default Login;
