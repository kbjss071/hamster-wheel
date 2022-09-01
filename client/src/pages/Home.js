import React, { useState } from "react";
import Exercises from '../components/Exercises';
import Login from '../components/Login'


export default function Home () {

    const [ loginPopup, setLoginPopup] = useState(true);

    const handleLoginClick = () => {
        setLoginPopup((loginPopup) => !loginPopup);
    };

    return (
        <div>
            <Navigation handleLoginClick={handleLoginClick} />
            <Login loginPopup={loginPopup} />
        </div>
    )
}