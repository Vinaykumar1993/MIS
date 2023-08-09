import React,{useState} from 'react';
import {Table,Button,Breadcrumb,Navbar,Modal} from 'react-bootstrap';
import Templatemaster from '@components/Templatemaster';
import RackSchema from '@schemas/Rackschema';
import * as Yup from "yup";
const RackMaster =(props)=>{
	// console.log("samplemaster_fields",samplemaster_fields)
	const [showmodal,setshowmodal]=useState(null),
	fields=RackSchema,
	initialvalues={name:"",description:"",status:true},
	yupschema=Yup.object({
        name: Yup.string().required('Required'),
     });
	return(
		<div>
		<Templatemaster>
			<Templatemaster.TmpBreadCrumb title="Rack Master" addclick={()=>setshowmodal(true)}/>
			<Templatemaster.TmpTable/>
			<Templatemaster.TmpModal title={"Add Rack"} size="lg" show={showmodal} handleClose={setshowmodal}>
				<Templatemaster.TmpForm onCancel={setshowmodal} fields={fields} initialvalues={initialvalues} yupschema={yupschema} />
			</Templatemaster.TmpModal>
			<Templatemaster.TmpPagination/>
		</Templatemaster>
		</div>
		)
}
export default RackMaster;
