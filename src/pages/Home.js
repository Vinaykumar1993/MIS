import React from 'react';
import Header from '@components/header';
import HomeRoutes from '@routes/HomeRoutes';
const Home =(props)=>{

	return(
			<div>
			<Header/>
			<HomeRoutes/>
			</div>
		)
}
export default Home;