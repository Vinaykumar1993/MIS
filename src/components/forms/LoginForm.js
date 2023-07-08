 import React from 'react';
 import { useFormik } from 'formik';
 import * as Yup from 'yup';
 import {Form,Button} from 'react-bootstrap';
import { useHistory } from "react-router-dom";
 

 const LoginForm = () => {
  let history = useHistory();
   const formik = useFormik({
     initialValues: {
       userName: '',
       password: ''
     },
     validationSchema: Yup.object({
       userName: Yup.string().required('Required'),
       password: Yup.string().required('Required'),
     }),

     onSubmit: values => {
      history.push('/home');
      //  alert(JSON.stringify(values, null, 2));
     }
   });

   return (

     <form onSubmit={formik.handleSubmit} className="loginform">
      <Form.Group controlId="formBasicUsername">
        <Form.Label>Email addresss</Form.Label>
        <Form.Control 
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur} 
        value={formik.values.userName} 
        name="userName" type="text" 
        placeholder="Enter email" />
        {formik.touched.userName && formik.errors.userName ? (
          <Form.Text className="text-muted error-text pl-1">
        {formik.errors.userName}
        </Form.Text>
        ) : null}
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur} 
        value={formik.values.password} 
        name="password" type="password" 
        placeholder="Enter your password" />
        {formik.touched.password && formik.errors.password ? (
          <Form.Text className="text-muted error-text pl-1">
        {formik.errors.password}
        </Form.Text>
        ) : null}
      </Form.Group>
        <a className="forgot_pwd_link" href="#">Forgot Password ?</a>
      <div className="btn_wrapper pt-2 text-center">
      <Button className="login_btn btn-lg" as="input" variant="primary" type="submit" value="Submit" />
      </div>
     </form>

   );

 };
 export default LoginForm;