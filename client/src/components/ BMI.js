import { useState } from 'react';

function CheckBMI({ handleBMIClick }) {

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

    const handleClick = () => {
        handleBMIClick()
    }
    return(
        <div className="BMIcomponent">
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

            <button onClick={() => {handleClick(); calculateBMI();}}>Calculate BMI</button>
        </div>
    )
}

export default CheckBMI;