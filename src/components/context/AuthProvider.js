import { useState, useEffect } from "react";
import { login, logout, onUserStateChange } from "../../services/firebase";
import { AuthContext } from "./AuthContext";

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange(setUser);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
