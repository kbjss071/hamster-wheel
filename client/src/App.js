import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import React, { useState } from 'react';
import Login from './components/Login';
import Home from './pages/Home';
import Signup from './pages/Signup'
import 'bootstrap/dist/css/bootstrap.min.css'
import CheckBMI from './components/BMI';



const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

function App() {

  const [ loginPopup, setLoginPopup] = useState(true);
  const [ bmiPopup, setBmiPopup] = useState(true);

  const handleLoginClick = () => {
    setLoginPopup((loginPopup) => !loginPopup);
  };

  const handleBMIClick = () => {
    setBmiPopup((bmiPopup) => !bmiPopup);
  }
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element= {
            <Home />
          } />
          <Route path="/login" element= {
            <Login />
          } />
          <Route path="signup" element = {
            <Signup />
          }  />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
