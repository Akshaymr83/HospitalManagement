// src/components/Login/SignUp.js

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";
import png2 from '../Img/png2.svg';
import Loader from "./Loader"; // Import the FullScreenLoader

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("Please fill in all fields");
      return; // Exit early if any field is empty
    }

    setLoading(true); // Set loading to true when signup starts

    axios
    .post("https://hospital-admin-side.onrender.com/signup", { name, email, password }) // 10 seconds timeout
    .then((res) => {
      setLoading(false);
      navigate("/login");
      alert("User created");
    })
    .catch((err) => {
      setLoading(false);
      console.log(err);
      alert("An error occurred. Please try again.");
    });
  };

  return (
    <>
      <div className="signupcontainer d-flex justify-content-center align-items-center flex-wrap">
        <div className="content-wrapper" id="signupcontent-wrapper">
          <div>
            <img className="png2" src={png2} alt="Signup" />
          </div>

          <div className="signupcontainer2">
            <form onSubmit={handleSubmit} style={{ width: '400px' }}>
              <h3 className="text-center">Register</h3>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  autoComplete="off"
                  name="name"
                  placeholder="Enter Your name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="email"
                  autoComplete="off"
                  name="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <br />
              <div className="form-group">
                <input
                  type="password"
                  autoComplete="off"
                  name="password"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <br />
              <div className="text-center">
                <button id="loginbutton" type="submit" disabled={loading}>
                  {loading ? "Creating..." : "Register"} {/* Show loading text */}
                </button>
              </div>
            </form>
            {loading && <Loader />} {/* Show the loader when loading is true */}
            <p style={{ textAlign: 'center' }}>
              <b>Already have an account?</b>
            </p>
            <Link
              to="/login"
              style={{ color: "blue", textAlign: "center", textDecoration: "none" }}
            >
              <p>Login</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
