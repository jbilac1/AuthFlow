import { createContext, useState, useEffect } from "react";
import { checkSession, login, logout } from "../services/authServices";
import PropTypes from "prop-types";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifySession = async () => {
      const session = await checkSession();
      if (session.authenticated) {
        setUser(session.user);
      }
      setLoading(false);
    };
    verifySession();
  }, []);

  const signIn = async (username, password) => {
    const res = await login(username, password);
    setUser(res.user);
  };

  const signOut = async () => {
    await logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );

  
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};