import React,{useEffect} from 'react';
import ReactDOM from "react-dom";
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

	const eventlistenerhandler= function(evt) {
        let flyoutEl = document.querySelector('.dropdown_container'),
        flyoutElText = document.querySelectorAll('.custom_dropdown'),
        childelem = document.querySelectorAll('.dropdown_container.children'),
          targetEl = evt.target; // clicked element   
			let somefilter   = Array.prototype.some,
				result   = flyoutElText,
				filtered = somefilter.call( result, function( node ) {

                    // console.log("targetel",targetEl)
				return node==targetEl;
			});
                console.log("targetel",flyoutEl,"=====",targetEl)
				// console.log('flyoutElText',flyoutElText);
        do {
          if((targetEl == flyoutEl)||filtered) {
          	console.log("clicking inside")
          	return;
          }
          // Go up the DOM
          targetEl = targetEl.parentNode;
        } while (targetEl);
        // This is a click outside.
        if(flyoutEl){
        	flyoutEl.remove();
        	childelem&&childelem.forEach((elem)=>elem.remove());
        }else{
        	document.removeEventListener("click",eventlistenerhandler);
        }
          	// return;

        // document.getElementById("flyout-debug").textContent = "Clicked outside!";
      }
    const getboundingpoints = (e,title="",children,dropdowns) => {
        e.preventDefault();
    	// document.removeEventListener("click",eventlistenerhandler);
        let boundingpoints = e.currentTarget.getBoundingClientRect();
        let boundingpointsForParent = document.querySelector('.dropdown_container.parent')&&document.querySelector('.dropdown_container.parent').getBoundingClientRect();
        console.log('boundingpoints',boundingpoints);
        let lastdropdown=!dropdowns || (dropdowns&&dropdowns.length==0);
        let createElem = document.createElement('div');
        createElem.setAttribute('class', `dropdown_container ${children?`children ${lastdropdown?'last':''}`:'parent'}`);
        let getparentWidth=boundingpointsForParent?boundingpointsForParent.width:0;
        createElem.style.top=(children?(boundingpoints.y):(boundingpoints.top+boundingpoints.height+boundingpoints.y))+"px";
        createElem.style.left=(children?((getparentWidth+boundingpoints.left)):boundingpoints.left)+"px";
        let checkDom = document.querySelector('.dropdown_container');
        let childelem = document.querySelectorAll('.dropdown_container.children');

 
        if (checkDom) {
        	if(!children){	
        	document.body.replaceChild(createElem,checkDom);
        	childelem&&childelem.forEach((elem)=>elem.remove());
        	}else{
        		let arrayIndex   = Array.prototype.findIndex,
				result   = childelem,
				somefilterfunction  =(elems,targetEl)=> {
					// return true;
				let somefilter=Array.prototype.some,
				filtered = somefilter.call( elems, function( node ) {
				return node==targetEl;
				})
				return filtered
				},
				getIndex=arrayIndex.call(result,(elem)=>somefilterfunction(elem.querySelectorAll('.custom_dropdown'),e.target));
				console.log("arrayIndex",getIndex)
				// if(getIndex>-1){
				childelem&&childelem.forEach((elem,index)=>{
				if(index>getIndex){
					elem.remove();
				}
				});
        	}
            if(dropdowns){
                  ReactDOM.render(
                    <Dropdown dropdowns={dropdowns} title={title}/>,
                    children?document.body.appendChild(createElem):createElem
                );
              }

        	// },2000)
        } else {
            ReactDOM.render(
                <Dropdown dropdowns={dropdowns} title={title}/>,
                document.body.appendChild(createElem)
            );
        }
        
        // document.body.appendChild(dropdown);
    }
const CustomNavDropown = ({ title,dropdowns }) => {
    const destroyElem=(e)=>{
    	let checkDom = document.querySelector('.dropdown_container');
    	if(checkDom){
    		// checkDom.remove();
    	}
    	// e.currentTarget.removeChild()
    }
    return (
        <div className="custom_dropdown" onMouseOver={(e)=>getboundingpoints(e,title,null,dropdowns)} onClick={(e)=>getboundingpoints(e,title,null,dropdowns)}>
				  <Nav.Link >{title}</Nav.Link>
			</div>
    )
}
export const Dropdown = ({title,dropdowns}) => {
	useEffect(()=>{
		document.addEventListener("click",eventlistenerhandler);
		// return document.removeEventListener("click",eventlistenerhandler);
	},[title])
    return (
        <div className="dropdown_layer">
        {dropdowns.map((obj)=>{
        	return obj.children? <NavDropdown.Item className="custom_dropdown" onMouseOver={(e)=>getboundingpoints(e,title,true,obj.children)} onClick={(e)=>getboundingpoints(e,title,true,obj.children)}>{obj.title}</NavDropdown.Item>:<NavDropdown.Item className="custom_dropdown" onMouseOver={(e)=>getboundingpoints(e,title,true,null)}>{obj.title}</NavDropdown.Item>
        })
        }	 
		</div>
    )
};
export default CustomNavDropown;