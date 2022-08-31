import React from "react";

function Navigation({ handleLoginClick }) {

    const handleClick = () => {
        handleLoginClick()
    }
    return (
        <section className="navigationComponent">
            <header>
                <button onClick={handleClick} class="linkbutton"><div class="buttonMagic">Login</div><div class="ease buttonColor"></div></button>
                <button onClick={handleClick} class="linkbutton"><div class="buttonMagic">Login</div><div class="ease buttonColor"></div></button>
                <button onClick={handleClick} class="linkbutton"><div class="buttonMagic">Login</div><div class="ease buttonColor"></div></button>
            </header>
            
        </section>
    )
};

export default Navigation;