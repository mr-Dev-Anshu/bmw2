import { createContext, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.config";
export const userForProfileContext = createContext();
export const UserForProfileContextProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState();

  onAuthStateChanged(auth, (curruser) => {
    if (curruser) {
      setCurrUser(curruser); 
    }
  });

  return (
    <userForProfileContext.Provider value={{ currUser }}>
       {children}
    </userForProfileContext.Provider>
  );
};
