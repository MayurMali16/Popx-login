import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";

function Signup({ onSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [company, setCompany] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!email || !password || !name) {
      setError("Please fill out all fields.");
      return;
    }

    onSignup(email, name); // Call the onSignup function with email and name
    navigate("/accountsetting"); // Navigate to '/accountsetting' after successful signup
  };

  return (
    <div className="container">
      <div className="container-info">
        <div className="header">
          <h2>
            Create Your
            <br /> Popx account
          </h2>
          <p>Lorem ipsum dolor sit amet .container-contentm!</p>
        </div>
        <form id="signup" onSubmit={handleSignUp}>
          <div className="input-wrapper">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="email"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="number">Phone Number</label>
            <input
              type="text"
              name="email"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
          </div>
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
          <div className="input-wrapper">
            <label htmlFor="name">Company Name</label>
            <input
              type="text"
              name="name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />
          </div>

          {error && <p className="error-message">{error}</p>}
          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
