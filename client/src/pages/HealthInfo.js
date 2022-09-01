import 'bootstrap/dist/css/bootstrap.css';


export default function HealthInfo() {
return (
	<div className="healthcontainer">
        <h1 className="HealthTips">Tips for Exercising</h1>
        <br />
        <div className="tipBox">
            <h2>Before You Workout</h2>
            <p>Get and stay hydrated to feel energized and keep your body happy!</p>
            <p>Eat a varity of healthy foods to help build muscle, keep your energy levels up, and help your body repair itself post workout. Carbs before a workout are best to fuel your body for optimal effects!</p>
            <p>Stretch your body to promote flexibility and lower the risk of injury.</p>
            <p>You can also warm up your body for a workout with other light exercises, such as walking.</p>
        </div>
        <br />
        <div className="tipBox">
            <h2>During Your Workout</h2>
            <p>Listen to music! It'll keep you pumped.</p>
            <p>Work out in intervals - for example: do as many reps as possible for 20 seconds, rest for 10 seconds, then repeat for 4 minutes. Again, rest for a minute, then repeat again.</p>
            <p>Again, stay hydrated! You can sweat out up to 10% of your body weight in a workout, but this isn't healthy. You don't want to lose more than 2%.</p>
        </div>
    </div>
)
};
