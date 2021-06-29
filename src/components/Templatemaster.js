import React from 'react';
import {Table,Button,Breadcrumb,Navbar,Modal,Pagination,Form,Row,Col} from 'react-bootstrap';
 import { useFormik } from 'formik';
 // import * as Yup from 'yup';
const TmpBreadCrumb=({addclick})=>{
	return(
			<Navbar>
				<Breadcrumb>
					<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
					<Breadcrumb.Item active>Item Master</Breadcrumb.Item>
				</Breadcrumb>
				<Navbar.Collapse className="justify-content-end">
					<Button variant="primary" size="sm" onClick={()=>addclick&&addclick()} >
					<i className="fa fa-plus"/>
					</Button>
				</Navbar.Collapse>
			</Navbar>
		)
}
const TmpModal=({...rest})=>{
	return(
			 <Modal
			 size={rest.size}
			 show={rest.show}
        onHide={rest.handleClose&&rest.handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{rest.title?rest.title:"title not given"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {rest.children}
        </Modal.Body>
      </Modal>
		)
}
const TmpTable=()=>{
	return(
	<Table  bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td><Button variant="primary" className="mr-2" size="sm" >
    <i className="fa fa-pencil-alt"/>
  </Button>
<Button variant="danger" size="sm" >
    <i className="fa fa-trash"/>
  </Button>
  </td>
    </tr>
  </tbody>
</Table>
	)
}
const TmpPagination = (props)=>{
	return(
		<Pagination>
  <Pagination.First />
  <Pagination.Prev />
  <Pagination.Item>{1}</Pagination.Item>
  <Pagination.Item>{10}</Pagination.Item>
  <Pagination.Item>{11}</Pagination.Item>
  <Pagination.Item active>{12}</Pagination.Item>
  <Pagination.Item>{13}</Pagination.Item>
  <Pagination.Item>{20}</Pagination.Item>
  <Pagination.Next />
  <Pagination.Last />
</Pagination>
		)
}
const TmpForm = ({initialvalues,yupschema,fields,...rest}) => {

   const formik = useFormik({
     initialValues:initialvalues,
     validationSchema: yupschema,
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     }
   });
   return (

     <form onSubmit={formik.handleSubmit} className="loginform1">
     <Row>
     {fields&&fields.map((obj,field_index)=>{
     	return(
     		<Col md={6} key={`field_index_${field_index}`}>
     		 <Form.Group controlId="formBasicUsername">
        <Form.Label>{obj.placeholder}</Form.Label>
        <Form.Control 
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur} 
        value={formik.values[obj.name]} 
        name={obj.name} type="text" 
        placeholder={obj.placeholder} />
        {formik.touched[obj.name] && formik.errors[obj.name] ? (
          <Form.Text className="text-muted error-text pl-1">
        {formik.errors[obj.name]}
        </Form.Text>
        ) : null}
      </Form.Group>  
      </Col>  
     		)
     })}
     </Row>
      <div className="btn_wrapper pt-2 text-right">
      <Button className="login_btn btn-lg mr-3"  as="input" onClick={()=>rest.onCancel&&rest.onCancel(false)} variant="danger" type="button"  value="Cancel" />
      <Button className="login_btn btn-lg" as="input"  variant="primary" type="submit" value="Submit" />
      </div>
     </form>

   );

 };
const Templatemaster =(props)=>{
	return(
		<div className="template_master">
		{props.children}
		</div>
		)
}
Templatemaster.TmpBreadCrumb=TmpBreadCrumb;
Templatemaster.TmpTable=TmpTable;
Templatemaster.TmpModal=TmpModal;
Templatemaster.TmpForm=TmpForm;
Templatemaster.TmpPagination=TmpPagination;
export default Templatemaster;
