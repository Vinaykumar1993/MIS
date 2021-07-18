import React from "react";
import {
  HashRouter as Router,
  BrowserRouter ,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "@pages/Login";
import Home from "@pages/Home";
export default function Routes() {
  return (
    <BrowserRouter>
        <Switch>
          <Route  path="/" exact ><Login /></Route>
          <Route  path="/home"><Home /></Route>
        </Switch>
    </BrowserRouter>
  );
}
