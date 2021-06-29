import React,{Fragment} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import SampleMaster from '@pages/SampleMaster';
 const HomeRoutes=(props)=> {
  // console.log("props",props.match.url);
    let { path, url } = useRouteMatch();
    console.log("path1",path)
  return (
        <Switch>
          <Route exact  path={`${path}`}><SampleMaster/></Route>
          <Route  path={`${path}/dashboard`}><h1>asfassas1</h1></Route>
        </Switch>
  );
}
export default HomeRoutes;
