
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Register from './components/Register';
import Notes from './components/Notes';
import Home from './components/Home';
import Login from './components/Login';
import { AuthProvider } from './context/AuthContext';
import { PrivateRoute } from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Switch>
            <Route path='/register' component={Register}></Route>
            <Route path='/login' component={Login}></Route>
            <PrivateRoute path='/notes' component={Notes} />
            <Route exact path='/' component={Home}></Route>
          </Switch>
        </div>
      </Router>
    </AuthProvider>


  );
}

export default App;
