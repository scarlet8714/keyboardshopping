import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { getSession, getUserData } from "../services/apiAuth";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  async function getUser() {
    const userData = await getUserData();
    setUser(userData[0].name);
  }
  async function checkAuthenticate() {
    const session = await getSession();
    console.log(session);
    if (session !== null) {
      setIsAuthenticated(true);
      getUser();
    }
  }
  checkAuthenticate();

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
