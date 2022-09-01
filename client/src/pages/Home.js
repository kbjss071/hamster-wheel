import React, { useState } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
=======
import Navigation from "../components/Navigation";
>>>>>>> 8183e2dc31f488556cc781cff55d6cf800aea529
=======
import Navigation from "../components/Navigation";
>>>>>>> 8183e2dc31f488556cc781cff55d6cf800aea529
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