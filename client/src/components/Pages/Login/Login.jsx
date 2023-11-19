import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../../features/auth/authApiSlice";
import { basicAlert } from "../../../utils/sweetAlert";
import { setmsgEmpty } from "../../../features/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, message, user } = useSelector((state) => state.auth);
  const [input, setInput] = useState({
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

  //onsubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    //validation
    if (!input.email || !input.password) {
      basicAlert(
        {
          title: "error",
          msg: "All fields are required",
        },
        "error"
      );
    }

    dispatch(loginUser({ email: input.email, password: input.password }));
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

    if (user) {
      navigate("/");
    }
  }, [error, message, user]);
  return (
    <>
      <div className="h-screen flex items-center justify-around">
        <div className="max-w-md mx-auto mb-40">
          <h1 className="text-4xl font-bold py-3 text-center">Login Now</h1>
          <form action="" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              value={input.email}
              onChange={handleChange}
              placeholder="kuddus@gmail.com"
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
