import React,{useState} from 'react';
import {Table,Button,Breadcrumb,Navbar,Modal} from 'react-bootstrap';
import Templatemaster from '@components/Templatemaster';
import Supplierschema from '@schemas/Supplierschema';
import * as Yup from "yup";
const SupplierMaster =(props)=>{
	// console.log("samplemaster_fields",samplemaster_fields)
	const [showmodal,setshowmodal]=useState(null),
	fields=Supplierschema,
	initialvalues={supplier_name:"",contact_person1:"",phone1:"",contact_person2:"",phone2:"",address1:"",address2:"",address3:"",city:"",pincode:"",email_id:"",status:true},
	yupschema=Yup.object({
       supplier_name: Yup.string().required('Required'),
       contact_person1: Yup.string().required('Required'),
       // phone1: Yup.string().required('Required'),
       // contact_person2: Yup.string().required('Required'),
       city: Yup.string().required('Required'),
       pincode: Yup.string().required('Required'),
       email_id: Yup.string().required('Required'),
       status: Yup.string().required('Required'),
     });
	return(
		<div>
		<Templatemaster>
			<Templatemaster.TmpBreadCrumb title="Supplier Master" addclick={()=>setshowmodal(true)}/>
			<Templatemaster.TmpTable/>
			<Templatemaster.TmpModal title={"Item"} size="lg" show={showmodal} handleClose={setshowmodal}>
				<Templatemaster.TmpForm onCancel={setshowmodal} fields={fields} initialvalues={initialvalues} yupschema={yupschema} />
			</Templatemaster.TmpModal>
			<Templatemaster.TmpPagination/>
		</Templatemaster>
		</div>
		)
}
export default SupplierMaster;
