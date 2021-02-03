import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay flex items-center">
        <div className="text-center w-screen">
          <h1 className='text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl'>MERN</h1>
          <p className="my-5 text-base text-indigo-500 sm:mt-5 sm:text-lg md:mt-5 md:text-xl lg:mx-0">MongoDB - Express - React - Node</p>
          <div>
            <Link to="/register">
              <button className="px-8 py-2 mr-5 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700" href="/register">
                Register
              </button>
            </Link>
            <Link to="/login">
              <button className="px-8 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200">Sign In</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
