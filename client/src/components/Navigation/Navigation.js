import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import './Navigation.css'

function Navigation({ handleLoginClick }) {
  const handleClick = () => {
    handleLoginClick()
  }

  function showNavigation (){
    if(Auth.loggedIn()){
      return (
        <div className="AHHHHH">
            <Link to="/exercises"><button class="otherButtons"><div class="buttonMagic">
              Exercises</div><div class="ease buttonColor"></div></button>
            </Link>
            <Link to="/bmi"><button class="otherButtons"><div class="buttonMagic">
              BMI</div><div class="ease buttonColor"></div></button>
            </Link>
            <Link to="/profile"><button class="otherButtons"><div class="buttonMagic">
              Profile</div><div class="ease buttonColor"></div></button>
            </Link>
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
            <button class="otherButtons"><div class="buttonMagic">
              Logout</div><div class="ease buttonColor"></div></button>
            </a>
        </div>
      )
    } else {
      return (

        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup"><button class="otherButtons"><div class="buttonMagic"><b>Signup</b>
              </div><div class="ease buttonColor"></div></button>

        <div className="AHHHHH">
            <Link to="/signup"><button class="otherButtons"><div class="buttonMagic">
              Signup</div><div class="ease buttonColor"></div></button>

            </Link>
            <Link to="/login">
              <button onClick={handleClick} class="linkbutton"><div class="buttonMagic"><b>Login</b></div><div class="ease buttonColor"></div></button>
            </Link>
        </div>
      )
    }
  }
  
  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
        <b>Hampster Wheel</b>
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
      )
  };

export default Navigation; 