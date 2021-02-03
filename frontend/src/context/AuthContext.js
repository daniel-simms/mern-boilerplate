import React, { useState, useContext } from "react";
import AlertContext from "./AlertContext";

import axios from "axios";
import setAuthToken from "../utils/setAuthToken";

const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {

  const { setAlert } = useContext(AlertContext);

  //
  // State
  //
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();

  //
  // Load User
  //
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const res = await axios.get("/api/auth");

      setIsAuthenticated(true);
      setUser(res.data);
    } catch (err) {
      localStorage.removeItem("token");
      setIsAuthenticated(false);
    }

    setLoading(false);
  };

  //
  // Register User
  //
  const register = async ({ name, email, password }) => {
    const body = { name, email, password };

    try {
      const res = await axios.post("/api/users", body);

      localStorage.setItem("token", res.data.token);
      loadUser();
    } catch (err) {
      console.log(err);
      const errors = err.response.data.errors;

      if (errors) {
        // errors.forEach((error) => alert(error.msg));
        errors.forEach((error) => setAlert(error.msg, "danger"));
      }

      localStorage.removeItem("token");
      setIsAuthenticated(false);
    }

    setLoading(false);
  };

  //
  // Login User
  //
  const login = async (email, password) => {
    const body = { email, password };

    try {
      const res = await axios.post("/api/auth", body);

      localStorage.setItem("token", res.data.token);
      loadUser();
    } catch (err) {
      console.log(err);
      const errors = err.response.data.errors;

      if (errors) {
        // errors.forEach((error) => alert(error.msg));
        errors.forEach((error) => setAlert(error.msg, "danger"));
      }

      localStorage.removeItem("token");
      setIsAuthenticated(false);
    }

    setLoading(false);
  };

  //
  // Logout / Clear Profile
  //
  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);

    setLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        loading,
        user,
        login,
        loadUser,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

