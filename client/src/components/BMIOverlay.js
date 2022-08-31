import React from "react";
import CheckBMI from "./ BMI";

const BMIOverlay = (props, { bmiPopup, BMI }) => {
    return (
        <div className="loginComponent">
        <div className={`${bmiPopup ? "active" : ""} show`}>
                <div className="container">
                    <div class="grid-container">
                    <div class="bmiOverLay">
                        <h1>Your BMI is... { props.BMI }</h1>
                        <div class="item1">18.5 and under... Underweight</div>
                        <div class="item2">18.5 to 24.9... Healthy Weight</div>
                        <div class="item3">25 to 29.9... Overweight</div>  
                        <div class="item4">30 and above... Obese</div>
                        <div class="item5">Body mass index (BMI) is a person’s weight in kilograms divided by the square of height in meters. BMI is an inexpensive and easy screening method for weight category—underweight, healthy weight, overweight, and obesity. BMI does not measure body fat directly, but BMI is moderately correlated with more direct measures of body fat 1,2,3. Furthermore, BMI appears to be as strongly correlated with various metabolic and disease outcome as are these more direct measures of body fatness</div> 
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

<div class="grid-container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>  
  <div class="item4">4</div>
  <div class="item5">5</div>  
</div>

export default BMIOverlay;