import React from "react";
import { Link } from "react-router-dom";

export default function Home () {

    return (

        <div style={{ textAlign: "center" }}>
            <h1><b>Welcome To The Hamster Wheel</b></h1>
            <h2>We provide information on workouts to help you with your fitness goals</h2>
            <h3>We also have tools such as the <Link to="/exercises"><b>Hamster Wheel</b></Link> to suggest new workouts, and our <Link to="/bmi"><b>BMI calculator</b></Link> to </h3>
            

        <div style={{ textAlign: "center" }} className="homePageContainer">
            <h1>Welcome to Hamster Wheel</h1>
            <br />
            <br />
            <h2>We provide information on workouts to help you with your fitness goals</h2>
            <h3>We also have tools such as the <Link to="/exercises">Hamster Wheel</Link> to suggest new workouts, and our <Link to="/bmi">BMI calculator</Link>.</h3>
            <br />
        <img src="https://media.istockphoto.com/photos/lace-up-for-the-workout-of-your-life-picture-id618982838?k=20&m=618982838&s=612x612&w=0&h=uafTGpqRbCFOzK1icFpa1iA4SvO3JxeIE0GbijeY4nA=" />

        </div>
    )
}