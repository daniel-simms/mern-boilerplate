import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { Switch } from "react-router-dom";
import PrivateRoute from "../routing/PrivateRoute";
import PublicRoute from "../routing/PublicRoute";
import Alert from "../layout/Alert";
//Routes
import Landing from "../../pages/landing/Landing";
import NotFound from "../layout/NotFound";
import Register from "../../pages/auth/Register";
import Login from "../../pages/auth/Login";
import Dashboard from "../../pages/dashboard/Dashboard";


const Routes = () => {
  
  const { loading, isAuthenticated } = useContext(AuthContext);

  return (
    <>
      <Alert />
      <Switch>
        <PublicRoute
          exact
          path="/"
          component={isAuthenticated && !loading ? Dashboard : Landing}
          navigation={isAuthenticated && !loading}
        />
        <PublicRoute exact path="/register" component={Register} navigation={false} />
        <PublicRoute exact path="/login" component={Login} navigation={false} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PublicRoute component={NotFound} navigation={false}/>
      </Switch>
    </>
  );
};

export default Routes;
