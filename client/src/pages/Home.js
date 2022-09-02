import React from "react";
import { Link } from "react-router-dom";

export default function Home () {

    return (
        <div style={{ textAlign: "center" }}>
            <h1><b>Welcome To The Hamster Wheel</b></h1>
            <h2>We provide information on workouts to help you with your fitness goals</h2>
            <h3>We also have tools such as the <Link to="/exercises"><b>Hamster Wheel</b></Link> to suggest new workouts, and our <Link to="/bmi"><b>BMI calculator</b></Link> to </h3>
            
        </div>
    )
}