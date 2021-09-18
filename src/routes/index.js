import React from "react";
import {
  HashRouter ,
  BrowserRouter as Router ,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "@pages/Login";
import Home from "@pages/Home";
export default function Routes() {
  return (
    <Router>
        <Switch>
          <Route  path="/" exact ><Login /></Route>
          <Route  path="/home"><Home /></Route>
        </Switch>
    </Router>
  );
}
