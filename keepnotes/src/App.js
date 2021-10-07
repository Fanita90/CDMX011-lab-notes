import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Register from './components/Register';
import Notes from './components/Notes';
import { createAccount, loginAccount } from './firebaseconfig'
import Home from './components/Home';
import Login from './components/Login';

function App() {

  const handleRegister = (email, password) => {
    createAccount(email, password);
  }
  const handleLogin = (email, password) => {
    loginAccount(email, password);
  }

  return (
    <Router>
      <div>
        <Switch>
          <Route path='/register'><Register handleRegister={handleRegister} /></Route>
          <Route path='/login'><Login handleLogin={handleLogin} /></Route>
          <Route path='/notes' component={Notes}></Route>
          <Route exact path='/' component={Home}></Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
