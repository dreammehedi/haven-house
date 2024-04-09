import { createUserWithEmailAndPassword } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext } from "react";
import auth from "../firebase/firebase.init";
export const AuthContext = createContext();

function AuthProvider({ children }) {
  // handle create user
  const handleRegister = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };
  // create all information about the auth users
  const authInfo = { handleRegister };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthProvider;
