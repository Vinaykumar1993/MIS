import React,{useState} from 'react';
import {Table,Button,Breadcrumb,Navbar,Modal} from 'react-bootstrap';
import Templatemaster from '@components/Templatemaster';
import Itemgroupschema from '@schemas/Itemgroupschema';
import * as Yup from "yup";
const ItemGroup =(props)=>{
	// console.log("samplemaster_fields",samplemaster_fields)
	const [showmodal,setshowmodal]=useState(null),
	fields=Itemgroupschema,
	initialvalues={category_name:"",group_name:"",group_description:"",status:""},
	yupschema=Yup.object({
       category_name: Yup.string().required('Required'),
       group_name: Yup.string().required('Required'),
       group_description: Yup.string().required('Required'),
       status: Yup.string().required('Required')
     });
	return(
		<div>
		<Templatemaster>
			<Templatemaster.TmpBreadCrumb title="Item Group Master" addclick={()=>setshowmodal(true)}/>
			<Templatemaster.TmpTable/>
			<Templatemaster.TmpModal title={"Item Group"} size="lg" show={showmodal} handleClose={setshowmodal}>
				<Templatemaster.TmpForm onCancel={setshowmodal} fields={fields} initialvalues={initialvalues} yupschema={yupschema} />
			</Templatemaster.TmpModal>
			<Templatemaster.TmpPagination/>
		</Templatemaster>
		</div>
		)
}
export default ItemGroup;
