import './App.css';
import React, { useState } from 'react';
import BMI from './components/ BMI';
import Login from './components/Login';
import Navagation from './components/Navagation';
import Exercises from './components/Exercises';

function App() {
  return (
    <div style={{ backgroundColor: '#f4f1de', width: '100px', height: '100px'}} >
    <div className="App">
      <div>
        <BMI /> <Exercises /> <Navagation /> <Login />
      </div>
    </div>
    </div>
  );
}

export default App;
