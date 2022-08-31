import React, { useState } from "react";
import CheckBMI from '../components/BMI';
import Exercises from '../components/Exercises';
import Navigation from '../components/Navagation'
import Login from '../components/Login'


export default function Home () {

    const [ loginPopup, setLoginPopup] = useState(true);
    const [ bmiPopup, setBmiPopup] = useState(true);

    const handleLoginClick = () => {
        setLoginPopup((loginPopup) => !loginPopup);
    };

    const handleBMIClick = () => {
        setBmiPopup((bmiPopup) => !bmiPopup);
    }
    return (
        <div>
            <Exercises />
            <Navigation handleLoginClick={handleLoginClick} />
            <Login loginPopup={loginPopup} />
            <CheckBMI handleBMIClick={handleBMIClick} bmiPopup={bmiPopup} />
        </div>
    )
}