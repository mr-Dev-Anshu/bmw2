import { createContext, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.config";
export const userContext = createContext();
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  onAuthStateChanged(auth, (curruser) => {
    if (curruser?.emailVerified) {
      setUser(curruser);
    }
  });

  return (
    <userContext.Provider value={{ user }}>
      {" "}
      {user ? (
        <div className="flex justify-center h-screen items-center ">
          Loading
        </div>
      ) : (
        children
      )}
    </userContext.Provider>
  );
};
