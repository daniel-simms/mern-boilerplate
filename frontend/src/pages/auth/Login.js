import React, { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";

import { Link, Redirect } from "react-router-dom";
import UtilityTemplate from "../templates/Utility";
// import PropTypes from "prop-types";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { isAuthenticated, login } = useContext(AuthContext);
  if (isAuthenticated) return <Redirect to="/dashboard" />;

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <UtilityTemplate>
      <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl mb-2">
        Sign In
      </h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <div>
          <label for="email" class="sr-only">
            Email address
          </label>
          <input
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div>
          <label for="password" class="sr-only">
            Password
          </label>
          <input
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            minLength="6"
          />
        </div>
        <button
          type="submit"
          className="my-2 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Login
        </button>
      </form>
      <p>
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Register
        </Link>
      </p>
    </UtilityTemplate>
  );
};

Login.propTypes = {};

export default Login;
