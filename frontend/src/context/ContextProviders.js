import React from "react";
import { AuthContextProvider } from "./AuthContext";
import { AlertContextProvider } from "./AlertContext";

export const ContextProviders = ({ children }) => {
  return (
    <AlertContextProvider>
      <AuthContextProvider>{children}</AuthContextProvider>
    </AlertContextProvider>
  );
};

export default ContextProviders;
