import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CreateNote from "./components/CreateNote";
import EditNote from "./components/EditNote";
import Home from "./components/Home";
import Login from "./components/Login";
import Notes from "./components/Notes";
import Register from "./components/Register";




function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/notes">
           <Notes/>
          </Route>
          <Route path="/create">
            <CreateNote/>
          </Route>
          <Route path="/edit">
            <EditNote/> 
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
