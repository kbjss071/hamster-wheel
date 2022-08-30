import React from "react";

const Login = ({ loginPopup }) => {
    return (
        <div className={`${loginPopup ? "active" : ""} show`}>
            <div className="loginOverlay">
                <div className="loginContainer">
                    <form>
                        <h1>Welcome Back!</h1>
                        <p><input type="text" className="loginUser" placeholder="Username" />
                        </p>
                        <p><input type="text" className="loginUser" placeholder="Password" />
                        </p>
                        <button className loginBtn>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
};


export default Login;