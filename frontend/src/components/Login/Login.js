import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import png3 from '../Img/png3.svg';
import Loader from "./Loader"; // Import your Loader component

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill in all fields");
      return; // Exit early if any field is empty
    }

    setLoading(true); // Set loading to true when login starts

    axios
      .post("https://hospital-admin-side.onrender.com/login", { email, password })
      .then((res) => {
        setLoading(false); // Reset loading state on response
        if (res.data.Status === "Success") {
          if (res.data.role === "admin") {
            navigate("/home");
          } else {
            navigate("/home");
          }
        }
      })
      .catch((err) => {
        setLoading(false); // Reset loading state on error
        console.log(err);
        alert("An error occurred. Please try again.");
      });
  };

  return (
    <>
      <div id="containerlogin" className="container-fluid d-flex justify-content-center align-items-center">
        <div className="content-wrapper" style={{ display: 'flex', flexDirection: 'row' }}>
          <div>
            <form className="loginform" onSubmit={handleSubmit}>
              <h3 className="text-center">LOGIN</h3>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                autoComplete="off"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <br /><br />
              <input
                placeholder="Enter your password"
                type="password"
                autoComplete="off"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <br /><br />
              <button id="loginbutton" type="submit" disabled={loading}>
                {loading ? "Logging in..." : "Login"} {/* Show loading text */}
              </button>
              <Link
                to="/signup" // Updated link to point to Signup
                style={{ color: "blue", textAlign: "center", textDecoration: "none" }}
              >
                <p>Sign Up</p>
              </Link>
            </form>
            {loading && <Loader />} {/* Show the loader when loading is true */}
          </div>
          <div>
            <img style={{ height: '200px', width: '200px' }} src={png3} alt="Login" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
