/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { auth } from "../../Firebase/Firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {


  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);



  const handleRegistration = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  

  const profileUpdate = (username, image) => {
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName: username,
      photoURL: image,
    });
  };



  const handleLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };



  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };



  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
    });
  }, []);


    

  const userInfo = {
    user,
    loading,
    handleRegistration,
    handleLogin,
    logOut,
    profileUpdate,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
