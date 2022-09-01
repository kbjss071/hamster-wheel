import React, { useState } from "react";
import CheckBMI from '../components/BMI';


function BMIPage () {

    const [ bmiPopup, setBmiPopup] = useState(true);

    const handleBMIClick = () => {
        setBmiPopup((bmiPopup) => !bmiPopup);
    }
    return (
        <div>
            <CheckBMI handleBMIClick={handleBMIClick} bmiPopup={bmiPopup} />
        </div>
    )
}

export default BMIPage;