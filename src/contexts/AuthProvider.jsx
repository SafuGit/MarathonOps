import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const provider = new GoogleAuthProvider();

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  const loginWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const registerWithEmail = (userName, photoURL, email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userData) => {
        const user = userData.user;
        return updateProfile(user, {
          displayName: userName,
          photoURL: photoURL
        });
      })
  }

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    })
    return () => {
      unsubscribed();
    }
  }, [])

  const userInfo = {
    user,
    setUser,
    loading,
    setLoading,
    googleSignIn,
    logOut,
    loginWithEmail,
    registerWithEmail,
  }
  return (
    <AuthContext value={userInfo}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;