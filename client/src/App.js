import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Home from './pages/Home';
import Signup from './pages/Signup'
import ExerciseSpinner from './pages/ExerciseSpinner';
import Navigation from './components/Navigation/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css'
import BMIPage from './pages/BMI';
import Login from './components/Login';
import React, { useState, useEffect } from "react";



const ProductDisplay = () => (
  <section>
    <div className="product">
      <div className="description">
      <h3>Donations</h3>
      <h5>$5.00</h5>
      </div>
    </div>
    <form action="/create-checkout-session" method="POST">
      <button type="submit">
        Checkout
      </button>
    </form>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);




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
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed!");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled!"
      );
    }
  }, []);
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element= {
            <Home />
          } />
          <Route path="/bmi" element= {
            <BMIPage />
          } />
          <Route path="signup" element = {
            <Signup />
          }  />
          <Route path='login' element = {
            <Login />
          } />
          <Route path="/exercises" element= {
            <ExerciseSpinner />
          } />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;