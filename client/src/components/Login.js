import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

function Login({ loginPopup }) {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState)
    try {
      const mutationResponse = await login({
        variables: { username: formState.username, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="loginComponent">
        <div className={`${loginPopup ? "active" : ""} show`}>
            <div className="loginOverlay">
                <div className="container">
                  <br />
      <Link to="/signup"></Link>
      <h2>Please sign in!</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <input
          type="text"
          name="username"
          className="username"
          placeholder="Username"
          onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <input
          type="text"
          name="password"
          className="password"
          placeholder="Password"
          onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="flex-row flex-end">
          <button
          type="submit"
          className="buttonMagic, linkbutton">Login</button>
          <br />
          <br />
        </div>
      </form>
    </div>
    </div>
    </div>
    </div>
  );
}

export default Login;







// import React from "react";

// const Login = ({ loginPopup }) => {
//     return (
//         <div className="loginComponent">
//         <div className={`${loginPopup ? "active" : ""} show`}>
//             <div className="loginOverlay">
//                 <div className="container">
//                     <form>
//                         <h1>Welcome Back!</h1>
//                         <p><input type="text" className="loginUser" placeholder="Username" />
//                         </p>
//                         <p><input type="text" className="loginUser" placeholder="Password" />
//                         </p>
//                         <button className="buttonMagic, linkbutton">Login</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//         </div>
//     )
// };


// export default Login;