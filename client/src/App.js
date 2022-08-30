import './App.css';
import BMI from './components/ BMI';
import Login from './components/Login';
import Navagation from './components/Navagation';

function App() {
  return (
    <div style={{ backgroundColor: '#f4f1de', width: '100px', height: '100px'}} >
    <div className="App">
      <div>
        <BMI /> <Navagation /> <Login />
      </div>
    </div>
    </div>
  );
}

export default App;
