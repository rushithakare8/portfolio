import React from "react";
import "./loginpage.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-cover bg-image">
        <div className="bg-white shadow-md rounded-md p-8 max-w-md w-full custom-blur">
          <div className="transition-transform duration-500 transform">
            <h2 className="text-2xl font-semibold mb-6 justify-center flex flex-wrap">
              Login
            </h2>
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="border rounded w-full py-2 px-3"
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="border rounded w-full py-2 px-3"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              <Link to="/register">
                <button className="text-blue-500 hover:underline focus:outline-none">
                  Create new account
                </button>
              </Link>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 block mx-auto hover:scale-110 transition-transform duration-300 ease-in-out"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
