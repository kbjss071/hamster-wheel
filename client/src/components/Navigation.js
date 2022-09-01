import React from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

<<<<<<< HEAD:client/src/components/Navagation.js
function Navigation({ handleLoginClick }){
  
}

function Nav() {
=======
function Navigation({ handleLoginClick }) {
>>>>>>> 8183e2dc31f488556cc781cff55d6cf800aea529:client/src/components/Navigation.js

    const handleClick = () => {
        handleLoginClick()
        
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/exercises">
              <button class="otherButtons"><div class="buttonMagic">
              Profile
              </div><div class="ease buttonColor"></div></button>
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else if (Auth.loggedIn() === false) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">
              <button class="otherButtons"><div class="buttonMagic">
              Signup
              </div><div class="ease buttonColor"></div></button>
            </Link>
          </li>
          <li className="mx-1">
          <button onClick={handleClick} class="linkbutton"><div class="buttonMagic">
              Login
          </div><div class="ease buttonColor"></div></button>
          </li>
        </ul>
      );
    }
  }
};


export default Navigation; 