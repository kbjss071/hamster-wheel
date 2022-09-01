import React from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

function Navigation({ handleLoginClick }) {
  
  const handleClick = () => {
    handleLoginClick()
  }
  
  return (
          <section className="navigationComponent">
              <header>
                  <button onClick={handleClick} class="linkbutton"><div class="buttonMagic">Login</div><div class="ease buttonColor"></div></button>
                  <Link to="/exercises"><button class="otherButtons"><div class="buttonMagic">Spinner</div><div class="ease buttonColor"></div></button></Link>
                  <Link to="/bmi"><button class="otherButtons"><div class="buttonMagic">BMI</div><div class="ease buttonColor"></div></button></Link>
              </header>
  
          </section>
      )
  };

export default Navigation; 