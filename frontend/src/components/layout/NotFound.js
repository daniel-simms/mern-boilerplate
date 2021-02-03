import React from "react";
import { Link } from "react-router-dom";
import UtilityTemplate from "../../pages/templates/Utility";

const NotFound = ({ navigation }) => {
  return (
    <UtilityTemplate navigation={navigation}>
      <h1 className="text-4xl tracking-tight font-extrabold text-indigo-500 sm:text-5xl md:text-8xl">
        404
      </h1>
      <p className="my-5 text-base sm:mt-5 sm:text-lg md:mt-5 md:text-xl lg:mx-0">
        Oops, the page you are looking for doesn't seem to exists!
      </p>
      <Link
        to="/"
        className="font-medium text-indigo-600 hover:text-indigo-500"
      >
        Go Home
      </Link>
    </UtilityTemplate>
  );
};

export default NotFound;
