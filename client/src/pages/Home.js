import BMI from '../components/BMI';
import Exercises from '../components/Exercises';
import Navigation from '../components/Navagation'
import Login from '../components/Login'

export default function Home () {
    return (
        <div>
            <BMI />
            <Exercises />
            <Navigation />
            <Login />
        </div>
    )
}
