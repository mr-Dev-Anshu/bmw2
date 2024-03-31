import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserContextProvider } from "./context/user.context";
import AuthContextProvider from "./context/AuthContextProvider";
import { UserForProfileContextProvider } from "./context/UserForProfile";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserForProfileContextProvider>
    <UserContextProvider>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </UserContextProvider>
  </UserForProfileContextProvider>
  
);
