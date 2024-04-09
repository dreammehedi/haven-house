import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
export const AuthContext = createContext();

function AuthProvider({ children }) {
  // user login check and set user after login or registration
  const [userInfo, setUserInfo] = useState(null);
  const [userLoader, setUserLoader] = useState(true);

  // check user login or not user on state change finding
  useEffect(() => {
    const checkUser = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUserLoader(false);
        setUserInfo(currentUser);
      } else {
        setUserLoader(true);
        setUserInfo(null);
      }
    });

    // after component unmount
    return () => {
      checkUser();
    };
  }, []);

  // handle create user with email and password
  const handleRegister = (email, password) => {
    setUserLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   handle user login with email and password
  const handleLogin = (email, password) => {
    setUserLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // handle logout user
  const handleLogout = () => {
    return signOut(auth);
  };

  //   handle create user with google account
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    setUserLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  //   handle create user with github account
  const githubProvider = new GithubAuthProvider();
  const handleGithubLogin = () => {
    setUserLoader(true);
    return signInWithPopup(auth, githubProvider);
  };

  //   handle create user with facebook account
  //   const facebookProvider = new FacebookAuthProvider();
  //   const handleFacebookLogin = () => {
  //   setUserLoader(true);
  //     return signInWithPopup(auth, facebookProvider);
  //   };

  // update user profile
  const updateUserProfile = (userName, photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: photoUrl,
    });
  };

  // create all information about the auth users
  const authInfo = {
    userInfo,
    userLoader,
    handleRegister,
    handleLogin,
    handleLogout,
    handleGoogleLogin,
    handleGithubLogin,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthProvider;
