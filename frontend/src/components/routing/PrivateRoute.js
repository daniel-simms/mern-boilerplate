import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { Route, Redirect } from "react-router-dom";
import Navbar from "../layout/Navbar";

const PrivateRoute = ({ component: Component, navigation = true, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <>
            {navigation && <Navbar />}
            {!isAuthenticated ? (
              <Redirect to="/login" />
            ) : (
              <Component {...props} />
            )}
          </>
        );
      }}
    />
  );
};

export default PrivateRoute;
