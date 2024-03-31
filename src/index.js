import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserContextProvider } from "./context/user.context";
import AuthContextProvider from "./context/AuthContextProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserContextProvider>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </UserContextProvider>
);
