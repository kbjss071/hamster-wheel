import React from "react";
import { Link } from "react-router-dom";

export default function Home () {

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Welcome to Hamster Wheel</h1>
            <h2>We provide information on workouts to help you with your fitness goals</h2>
            <h3>We also have tools such as the <Link to="/exercises">Hamster Wheel</Link> to suggest new workouts, and our <Link to="/bmi">BMI calculator</Link> to </h3>
            
        </div>
    )
}