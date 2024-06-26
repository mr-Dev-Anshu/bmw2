import { createContext, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.config";
export const userContext = createContext();
export const UserContextProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState();

  onAuthStateChanged(auth, (curruser) => {
    if (curruser) {
      setCurrUser(curruser); 
    }
  });

  return (
    <userContext.Provider value={{ currUser }}>
       {children}
    </userContext.Provider>
  );
};
