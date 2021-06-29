import React from 'react';
import Header from '@components/header';
import HomeRoutes from '@routes/HomeRoutes';
import { withRouter } from "react-router";
const Home =(props)=>{
	// console.log("props",props);
	return(
			<div>
			<Header/>
			<HomeRoutes/>
			</div>
		)
}
export default Home;