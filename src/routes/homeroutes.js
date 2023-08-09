import React,{Fragment} from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import SampleMaster from '@pages/SampleMaster';
import ItemCategory from '@pages/ItemCategory';
import ItemGroup from '@pages/ItemGroup';
import ItemMaster from '@pages/ItemMaster';
import SupplierMaster from '@pages/SupplierMaster';
import CompanyMaster from "@pages/CompanyMaster";
import CustomerMaster from "@pages/CustomerMaster";
import RackMaster from "@pages/RackMaster";

 const HomeRoutes=(props)=> {
  // console.log("props",props.match.url);
    let { path, url } = useRouteMatch();
    console.log("path1",path)
  return (
        <Switch>
          <Route path={`${path}/item_category`}><ItemCategory /></Route>
          <Route path={`${path}/item_group`}><ItemGroup /></Route>
          <Route path={`${path}/item`}><ItemMaster /></Route>
          <Route path={`${path}/supplier`}><SupplierMaster /></Route>
          <Route path={`${path}/company`}><CompanyMaster /></Route>
          <Route path={`${path}/customer`}><CustomerMaster /></Route>
          <Route path={`${path}/rack`}><RackMaster /></Route>

        </Switch>
  );
}
export default HomeRoutes;
