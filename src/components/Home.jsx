import React from "react";
import popx from "../assets/popx.png";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="container-content">
        <img src={popx} alt="PopX Logo" />
        <h2>Welcome to PopX</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          modi, sequi cumque reprehenderit doloremque recusandae odio asperiores
          aut debitis.
        </p>
        <button onClick={() => navigate("/createaccount")}>
          Create Account
        </button>
        <button onClick={() => navigate("/login")}>
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default Home;
