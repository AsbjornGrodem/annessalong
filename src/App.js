import React, {useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import {   BrowserRouter as Router,   Switch,    Route,    Link  } from "react-router-dom";
import Home from './Components/Home';
import Dashboard from './Components/Dashboard'
import Produkter from './Components/Produkter'
import Test from './Components/Test'

//https://www.w3schools.com/css/tryit.asp?filename=trycss3_flexbox_website2

function App() {
  return (
    <div>
        <Header />
          <div>
            <Router>
                <div>
                <Link to="/" type="button"  className="btn btn-light">Home</Link>
                <Link to="/about" type="button"  className="btn btn-light">About</Link>
                <Link to="/dashboard" type="button" className="btn btn-light">Dashboard</Link>
                <Link to="/produkter" type="button" className="btn btn-light">Produkter</Link>
               </div>

               <div>
               <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/produkter">
                        <Produkter />
                    </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    </div>
  );
}


export default App;