import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-around">
        <div className="max-w-md mx-auto mb-40">
          <h1 className="text-4xl font-bold py-3 text-center">Login Now</h1>
          <form action="">
            <input type="email" placeholder="mail@gmail.com" />
            <input type="password" placeholder="password" />
            <button className="login-button" type="submit">
              Submit
            </button>
            <p className="text-center py-3">
              Don't have an account yet?
              <span className="px-2 underline hover:text-red-500">
                <Link to="/register">Register</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
