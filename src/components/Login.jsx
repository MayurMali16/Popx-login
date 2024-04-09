import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill out all fields.");
      return;
    }

    onLogin(email); // Pass email data to the parent component
    navigate("/accountsettings");
  };

  return (
    <div className="container">
      <div className="container-lg">
        <div className="header">
          <h2>
            Sign in to your
            <br /> Popx account
          </h2>
          <p>Lorem ipsum dolor sit amet .container-contentm!</p>
        </div>
        <form id="login" onSubmit={handleLogin}>
          <div className="input-wrapper">
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
