import './App.css';
import React, { useState } from "react";
import CheckBMI from './components/ BMI';
import Login from './components/Login';
import Navigation from './components/Navagation';
import BMIOverlay from './components/BMIOverlay';

function App() {

  const [ loginPopup, setLoginPopup] = useState(true);
  const [ bmiPopup, setBmiPopup] = useState(true);

  const handleLoginClick = () => {
    setLoginPopup((loginPopup) => !loginPopup);
  };

  const handleBMIClick = () => {
    setBmiPopup((bmiPopup) => !bmiPopup);
  }
  return (
    <div className="App">
      <div>
        <Navigation handleLoginClick={handleLoginClick} />
        <Login loginPopup={loginPopup} />
        <CheckBMI handleBMIClick={handleBMIClick} />
        <BMIOverlay bmiPopup={bmiPopup} />
      </div>
    </div>
  );
}

export default App;
