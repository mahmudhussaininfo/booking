import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../features/auth/authApiSlice";
import { basicAlert } from "../../../utils/sweetAlert";
import { setmsgEmpty } from "../../../features/auth/authSlice";

const Register = () => {
  const dispatch = useDispatch();
  const { error, message } = useSelector((state) => state.auth);
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  //handleChange
  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!input.name || !input.email || !input.password) {
      return basicAlert(
        {
          title: "Try Again",
          msg: "All Fields are Required",
        },
        "error"
      );
    }

    dispatch(
      registerUser({
        name: input.name,
        email: input.email,
        password: input.password,
      })
    );
    setInput({
      name: "",
      email: "",
      password: "",
    });
  };

  useEffect(() => {
    if (error) {
      basicAlert(
        {
          title: "error",
          msg: error,
        },
        "error"
      );
      dispatch(setmsgEmpty());
    }
    if (message) {
      basicAlert(
        {
          title: "successful",
          msg: message,
        },
        "success"
      );
      dispatch(setmsgEmpty());
    }
  }, [error, message]);

  return (
    <>
      <div className="h-screen flex items-center justify-around">
        <div className="max-w-md mx-auto mb-40">
          <h1 className="text-4xl font-bold py-3 text-center">Register Now</h1>
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={handleChange}
              placeholder="Kuddus Uddin"
            />
            <input
              type="email"
              name="email"
              value={input.email}
              onChange={handleChange}
              placeholder="mail@gmail.com"
            />
            <input
              type="password"
              name="password"
              value={input.password}
              onChange={handleChange}
              placeholder="password"
            />
            <button className="login-button" type="submit">
              Submit
            </button>
            <p className="text-center py-3">
              Alredy have an account?
              <span className="px-2 underline hover:text-red-500">
                <Link to="/login">Login</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
