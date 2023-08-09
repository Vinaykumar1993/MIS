import React,{useState} from 'react';
import {Table,Button,Breadcrumb,Navbar,Modal} from 'react-bootstrap';
import Templatemaster from '@components/Templatemaster';
import CustomerSchema from '@schemas/Customerschema';
import * as Yup from "yup";
const CustomerMaster =(props)=>{
	// console.log("samplemaster_fields",samplemaster_fields)
	const [showmodal,setshowmodal]=useState(null),
	fields=CustomerSchema,
	initialvalues={customer_name:"",phone:"",address1:"",address2:"",address3:"",city:"",pincode:"",email_id:""},
	yupschema=Yup.object({
        customer_name: Yup.string().required('Required'),
        phone: Yup.string().required('Required'),
     });
	return(
		<div>
		<Templatemaster>
			<Templatemaster.TmpBreadCrumb title="Customer Master" addclick={()=>setshowmodal(true)}/>
			<Templatemaster.TmpTable/>
			<Templatemaster.TmpModal title={"Add Customer"} size="lg" show={showmodal} handleClose={setshowmodal}>
				<Templatemaster.TmpForm onCancel={setshowmodal} fields={fields} initialvalues={initialvalues} yupschema={yupschema} />
			</Templatemaster.TmpModal>
			<Templatemaster.TmpPagination/>
		</Templatemaster>
		</div>
		)
}
export default CustomerMaster;
