import React from "react";
import profile from "../assets/profile.png";
import "./acccsetting.css";

function Acccsetting({ emailData }) {
  const { email } = emailData || {};

  return (
    <div className="container">
      <div className="container-acc-cc">
        <h2>Account Settings</h2>
        <div className="content-cc">
          <img src={profile} alt="" className="profile-img" />
          <div className="name-email">{email && <p>{email}</p>}</div>
        </div>
      </div>
    </div>
  );
}

export default Acccsetting;
