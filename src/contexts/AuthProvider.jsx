import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(null);

  const provider = new GoogleAuthProvider();

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
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
  }
  return (
    <AuthContext value={userInfo}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;