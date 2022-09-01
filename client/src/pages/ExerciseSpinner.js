import React, { useState } from "react";
import Exercises from "../components/Exercises";
import Spinner from "../components/Spinner";

export default function ExerciseSpinner () {

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
            <Spinner />
            <Exercises />
        </div>
    )
}