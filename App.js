// import React, { useEffect } from 'react';

import React from 'react';
import { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from './Product';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";
import { StateProvider } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();


  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path='/checkout'>
              <Header />
            <Checkout />
          </Route>
          <Route path='/'>
              <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );

}


export default App;