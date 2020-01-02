import React from 'react';
import './App.css';
import Header from './Components/Header';
import Omoss from './Components/Omoss';
import {   BrowserRouter as Router,   Switch,    Route,    Link  } from "react-router-dom";
import Home from './Components/Home';
import Dashboard from './Components/Dashboard'
import Produkter from './Components/Produkter'
import { CartProvider } from './Components/CartContext'

//https://www.w3schools.com/css/tryit.asp?filename=trycss3_flexbox_website2
//https://stackblitz.com/edit/react-context-tutorial

function App() {
  return (
      <CartProvider>
            <div>
                <Header />
                <div>
                    <Router>
                        <div className="navit">
                        <Link to="/" type="button"  className="btn btn-light">Hjem</Link>
                        <Link to="/omoss" type="button"  className="btn btn-light">Om oss</Link>
                        <Link to="/dashboard" type="button" className="btn btn-light">Bestill time</Link>
                        <Link to="/produkter" type="button" className="btn btn-light">Produkter</Link>
                    </div>

                    <div>
                    <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/omoss">
                                <Omoss />
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
        </CartProvider>
  );
}


export default App;