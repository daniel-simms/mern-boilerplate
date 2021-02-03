import React, { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import AlertContext from "../../context/AlertContext";

import { Link, Redirect } from "react-router-dom";
import UtilityTemplate from "../templates/Utility";
// import PropTypes from "prop-types";

const Register = () => {
  const { setAlert } = useContext(AlertContext);
  const { register, isAuthenticated } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  if (isAuthenticated) return <Redirect to="/dashboard" />;

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({ name, email, password });
    }
  };

  return (
    <UtilityTemplate>
      <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl mb-2">
        Register
      </h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <div>
          <label for="name" class="sr-only">
            Name
          </label>
          <input
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
          />
        </div>

        <div>
          <label for="email" class="sr-only">
            Email
          </label>
          <input
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>

        <div>
          <label for="password" class="sr-only">
            Passwowrd
          </label>
          <input
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>

        <div>
          <label for="password2" class="sr-only">
            Confirm Password
          </label>
          <input
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none rounded-b-md focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={(e) => onChange(e)}
          />
        </div>

        <button
          type="submit"
          className="my-2 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Register
        </button>
      </form>
      <p>
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Sign In
        </Link>
      </p>
    </UtilityTemplate>
  );
};

Register.propTypes = {};

export default Register;
