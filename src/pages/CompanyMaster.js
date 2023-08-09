import React,{useState} from 'react';
import {Table,Button,Breadcrumb,Navbar,Modal} from 'react-bootstrap';
import Templatemaster from '@components/Templatemaster';
import CompanySchema from '@schemas/Companyschema';
import * as Yup from "yup";
const CompanyMaster =(props)=>{
	// console.log("samplemaster_fields",samplemaster_fields)
	const [showmodal,setshowmodal]=useState(null),
	fields=CompanySchema,
	initialvalues={company_name:"",contact_person:"",phone:"",address1:"",address2:"",address3:"",city:"",pincode:"",email_id:"",status:true},
	yupschema=Yup.object({
        company_name: Yup.string().required('Required'),
        contact_person: Yup.string().required('Required'),
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
			<Templatemaster.TmpBreadCrumb title="Company Master" addclick={()=>setshowmodal(true)}/>
			<Templatemaster.TmpTable/>
			<Templatemaster.TmpModal title={"Add Company    "} size="lg" show={showmodal} handleClose={setshowmodal}>
				<Templatemaster.TmpForm onCancel={setshowmodal} fields={fields} initialvalues={initialvalues} yupschema={yupschema} />
			</Templatemaster.TmpModal>
			<Templatemaster.TmpPagination/>
		</Templatemaster>
		</div>
		)
}
export default CompanyMaster;
