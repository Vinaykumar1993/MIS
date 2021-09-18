import React,{Fragment} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import SampleMaster from '@pages/SampleMaster';
import ItemCategory from '@pages/ItemCategory';
import ItemGroup from '@pages/ItemGroup';
import ItemMaster from '@pages/ItemMaster';
 const HomeRoutes=(props)=> {
  // console.log("props",props.match.url);
    let { path, url } = useRouteMatch();
    console.log("path1",path)
  return (
        <Switch>
          <Route exact  path={`${path}`}><SampleMaster /></Route>
          <Route path={`${path}/item_category`}><ItemCategory /></Route>
          <Route path={`${path}/item_group`}><ItemGroup /></Route>
          <Route path={`${path}/item`}><ItemMaster /></Route>
        </Switch>
  );
}
export default HomeRoutes;
