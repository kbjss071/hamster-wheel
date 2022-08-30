import { useState } from 'react';

export default function BMI() {

    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [BMI, setBMI] = useState('');

    let onWeightChange = (e) => {
        setWeight(e.target.value);
        console.log(weight)
    };

    let onHeightChange = (e) => {
        setHeight(e.target.value);
        console.log(height)
    };

    let calculateBMI = (e) => {
        setBMI((703 * weight)/(height**2));
    }
    return(
        <div>

            <input 
                type='text'
                value={weight}
                placeholder='Weight (pounds)'
                onChange={onWeightChange}
            />

            <input 
                type='text'
                value={height}
                placeholder='Height (inches)'
                onChange={onHeightChange}
            />

            <button onClick={calculateBMI}>Calculate BMI</button>

            <p> BMI: {BMI} </p>

        </div>
    )
}
