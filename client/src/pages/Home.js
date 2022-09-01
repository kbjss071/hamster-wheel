import React, { useState } from "react";
import Navigation from "../components/Navigation/Navigation";
import Login from '../components/Login'


export default function Home () {

    const [ loginPopup, setLoginPopup] = useState(true);

    const handleLoginClick = () => {
        setLoginPopup((loginPopup) => !loginPopup);
    };

    return (
        <div>
            <Login loginPopup={loginPopup} />
        </div>
    )
}