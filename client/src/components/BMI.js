import { useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import {UPDATE_USER} from '../utils/mutations'

function CheckBMI({ handleBMIClick, bmiPopup }) {
    const { loading, error, data} = useQuery()
    const [updateUser, {err}] = useMutation(UPDATE_USER)
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [BMI, setBMI] = useState('');

    let onWeightChange = async (e) => {
        setWeight(e.target.value);
        console.log(weight)
        await updateUser({
            variables: {
                weight: weight
            }
        })
    };

    let onHeightChange = async (e) => {
        setHeight(e.target.value);
        console.log(height)
        await updateUser({
            variables: {
                height: height
            }
        })
    };

    let calculateBMI = (e) => {
        setBMI((703 * weight)/(height**2));
    }

    const handleClick = () => {
        handleBMIClick()
    }
    return(
        <div className="whyisreactsodifficultabouteverything">
        <div className="BMIcomponent">
            <input 
                type='text'
                value={weight}
                name="weight"
                placeholder='Weight (pounds)'
                onChange={onWeightChange}
            />
            <br />
            <br />
            <input 
                type='text'
                value={height}
                name="height"
                placeholder='Height (inches)'
                onChange={onHeightChange}
            />
            <br />
            <br />
            <button className="buttoncolor" onClick={() => {handleClick(); calculateBMI();}}>Calculate BMI</button>
            <br />
            <br />
        </div>
        <div className="loginComponent">
            <div className={`${bmiPopup ? "active" : ""} show`}>
        <div className="container">
            <div className="grid-container">
            <div className="bmiOverLay">
                <h1>Your BMI is... {BMI} </h1>
            </div>
            </div>
        </div>
    </div>
</div>
<div className="item1">18.5 and under... Underweight</div>
                <div className="item2">18.5 to 24.9... Healthy Weight</div>
                <div className="item3">25 to 29.9... Overweight</div>  
                <div className="item4">30 and above... Obese</div>
                <div className="item5">Body mass index (BMI) is a person’s weight in kilograms divided by the square of height in meters. BMI is an inexpensive and easy screening method for weight category—underweight, healthy weight, overweight, and obesity. BMI does not measure body fat directly, but BMI is moderately correlated with more direct measures of body fat 1,2,3. Furthermore, BMI appears to be as strongly correlated with various metabolic and disease outcome as are these more direct measures of body fatness</div> 

</div>
        
    )
}

export default CheckBMI;