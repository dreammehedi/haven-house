import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext } from "react";
import auth from "../firebase/firebase.init";
export const AuthContext = createContext();

function AuthProvider({ children }) {
  // handle create user with email and password
  const handleRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   handle user login with email and password
  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   handle create user with google account
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //   handle create user with github account
  const githubProvider = new GithubAuthProvider();
  const handleGithubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };

  //   handle create user with twitter account
  //   const facebookProvider = new FacebookAuthProvider();
  //   const handleFacebookLogin = () => {
  //     return signInWithPopup(auth, facebookProvider);
  //   };

  // create all information about the auth users
  const authInfo = {
    handleRegister,
    handleLogin,
    handleGoogleLogin,
    handleGithubLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthProvider;
