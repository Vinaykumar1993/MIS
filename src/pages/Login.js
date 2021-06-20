import React from 'react';
import LoginForm from '@components/forms/LoginForm';
import {Container,Dropdown} from 'react-bootstrap';
const Login =()=>{
	return (
		<div className="login_wrapper">
		<Container>
			<div className="login_box">
			<h2 className="text-center clr-white pb-2">MIS</h2>
			<div className="login_page">
			<h2 >Login</h2>
			<hr className="pb-2" />
				<LoginForm/>
			</div>
			</div>
			</Container>
			</div>
		)
}
export default Login;