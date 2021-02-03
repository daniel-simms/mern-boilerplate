import React from "react";
import { Route } from "react-router-dom";
import Navbar from "../layout/Navbar";

const PublicRoute = ({ component: Component, navigation = true, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <>
            {navigation && <Navbar />}
            <Component {...props} />
          </>
        );
      }}
    />
  );
};

export default PublicRoute;
