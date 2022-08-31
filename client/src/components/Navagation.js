import React from "react";


function Navagation({ handleLogicClick }) {

    const handleClick = () => {
        handleLogicClick()
    }
    return (
        <div className="navigation">
            <div>
                <button onClick={handleClick} class="linkbutton"><div class="popupTitle">Login</div><div class="ease buttonColor"></div></button>
            </div>
        </div>
    )
};

export default Navagation;