import React,{useState} from 'react';
import {Table,Button,Breadcrumb,Navbar,Modal} from 'react-bootstrap';
import Templatemaster from '@components/Templatemaster';
import samplemaster_fields from '@schemas/samplemaster.js';
import * as Yup from "yup";
const SampleMaster =(props)=>{
	// console.log("samplemaster_fields",samplemaster_fields)
	const [showmodal,setshowmodal]=useState(null),
	fields=samplemaster_fields,
	initialvalues={firstname:"",secondname:""},
	yupschema=Yup.object({
       firstname: Yup.string().required('Required'),
       secondname: Yup.string().required('Required')
     });
	return(
		<div>
		<Templatemaster>
			<Templatemaster.TmpBreadCrumb addclick={()=>setshowmodal(true)}/>
			<Templatemaster.TmpTable/>
			<Templatemaster.TmpModal title={"Sample Master"} size="lg" show={showmodal} handleClose={setshowmodal}>
				<Templatemaster.TmpForm onCancel={setshowmodal} fields={fields} initialvalues={initialvalues} yupschema={yupschema} />
			</Templatemaster.TmpModal>
			<Templatemaster.TmpPagination/>
		</Templatemaster>
		</div>
		)
}
export default SampleMaster;
