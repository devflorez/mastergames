import { createContext, useContext } from "react";
import { useEffect, useState } from "react";
import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
export const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth,(user) => {
      setUser(user);
    });
  }, []);
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const user = useContext(UserContext);
  if (user===undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return user;
};
