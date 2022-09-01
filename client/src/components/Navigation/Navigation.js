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
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/exercises">
              Exercises
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/bmi">
              BMI
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/profile">
              Profile
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      )
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1 NavigationComponent">
            <Link to="/login">
              <button onClick={handleClick} class="linkbutton"><div class="buttonMagic">Login</div><div class="ease buttonColor"></div></button>
            </Link>
          </li>
        </ul>
      )
    }
  }
  
  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          Hampster wheel
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
      )
  };

export default Navigation; 
          // <section className="navigationComponent">
          //     <header>
          //         <button onClick={handleClick} class="linkbutton"><div class="buttonMagic">Login</div><div class="ease buttonColor"></div></button>
          //         <Link to="/exercises"><button class="otherButtons"><div class="buttonMagic">Spinner</div><div class="ease buttonColor"></div></button></Link>
          //         <Link to="/bmi"><button class="otherButtons"><div class="buttonMagic">BMI</div><div class="ease buttonColor"></div></button></Link>
          //     </header>
  
          // </section>