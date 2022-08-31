import './App.css';
<<<<<<< Updated upstream
import BMI from './components/ BMI0;'
=======
import React, { useState } from "react";
import CheckBMI from './components/ BMI';
import Login from './components/Login';
import Navigation from './components/Navagation';
import BMIOverlay from './components/BMIOverlay';
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
    <div className="App">
      <div>
        <BMI />
=======
    <div>
    <div className="App">
      <div>
        <Navigation handleLoginClick={handleLoginClick} />
        <Login loginPopup={loginPopup} />
        <CheckBMI handleBMIClick={handleBMIClick} />
        <BMIOverlay bmiPopup={bmiPopup} />
>>>>>>> Stashed changes
      </div>
    </div>
  );
}

export default App;
