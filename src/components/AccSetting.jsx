import React from 'react';
import profile from "../assets/profile.png";
import './accsetting.css';

function AccSetting({ userData }) {
  const { email, name } = userData || {};

  return (
    <div className='container'>
      <div className='container-acc'>
        <h2>Account Settings</h2>
        <div className='content'>
          <img src={profile} alt='' className='profile-img' />
          <div className='name-email'>
            {name && <p>{name}</p>}
            {email && <p>{email}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccSetting;
