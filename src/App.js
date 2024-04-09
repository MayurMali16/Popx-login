import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import AccSetting from './components/AccSetting';
import Acccsetting from './components/Acccsetting';

function App() {
  const [userData, setUserData] = useState({});
  const [emailData, setEmailData] = useState({});

  const handleSignup = (email, name) => {
    setUserData({ email, name });
  };
   const handleLogin = (email) => {
     setEmailData({email});
   }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createaccount" element={<Signup onSignup={handleSignup} />} />
        <Route path="/login" element={<Login  onLogin={handleLogin}/>} />
        <Route
          path="/accountsetting"
          element={<AccSetting userData={userData} />}
        />
          <Route
          path="/accountsettings"
          element={<Acccsetting emailData={emailData} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
