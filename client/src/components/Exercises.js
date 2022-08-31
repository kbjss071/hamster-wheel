import React from "react";

export default function Exercises() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9f70ec10d0mshb56b0adfece8d42p1746f8jsn51a2dfd4690a',
            'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
        }
    };

    var muscle = ['biceps', 'triceps', 'chest', 'lower_back', 'middle_back', 'abdominals', 'quadriceps', 'calves']

    const spin = () => {
        fetch(`https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=${muscle[Math.floor(Math.random() * muscle.length)]}`, options)
        .then(response => response.json())
        .then((response) => {
            for (let i = 0; i < response.length; i++) {
                if (response[i].equipment === 'none' || response[i].equipment === 'body_only') {
                    console.log(response[i].name)
                    break;
                }
            }
        })
    }

    return(
        <div>
            <button className="btn-primary" onClick={spin}>SPIN THE WHEEL</button>
        </div>
    );
}