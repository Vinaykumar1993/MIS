import React,{useEffect} from 'react';
import ReactDOM from "react-dom";
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

	const eventlistenerhandler= function(evt,sendactive=null) {
        let flyoutEl = document.querySelector('.dropdown_container'),
        flyoutElText = document.querySelectorAll('.custom_dropdown'),
        flyoutElNav_link = document.querySelectorAll('.custom_dropdown .nav-link'),
        childelem = document.querySelectorAll('.dropdown_container.children'),
        navbardropdowns=document.querySelectorAll('.navbar .custom_dropdown a'),
          targetEl = evt.target; // clicked element   
			let somefilter   = Array.prototype.some,
				result   = flyoutElText,
				filtered = somefilter.call( result, function( node ) {

                    // console.log("targetel",targetEl)
				return node==targetEl;
			});
                let somefilter1   = Array.prototype.some,
                result1   = flyoutElNav_link,
                filtered1 = somefilter1.call( result1, function( node ) {

                    // console.log("targetel",targetEl)
                return node==targetEl;
            });
                // console.log("targetel",flyoutEl,"=====",targetEl)
				// console.log('flyoutElText',flyoutElText);
        do {
          if((targetEl == flyoutEl)||filtered ||filtered1) {
          	// console.log("clicking inside")
          	return;
          }
          // Go up the DOM
          targetEl = targetEl.parentNode;
        } while (targetEl);
        // This is a click outside.
        if(flyoutEl){
            navbardropdowns&&navbardropdowns.forEach((elem)=>elem.classList.remove('active_master'));
        	flyoutEl.remove();
        	childelem&&childelem.forEach((elem)=>elem.remove());
            sendactive&&sendactive(null);
        }else{
        	document.removeEventListener("click",eventlistenerhandler);
            document.removeEventListener("mouseover",eventlistenerhandler);

        }
          	// return;

        // document.getElementById("flyout-debug").textContent = "Clicked outside!";
      }
      const removeEveryDropdowns = () => {
        let flyoutEl = document.querySelector('.dropdown_container'),
        flyoutElText = document.querySelectorAll('.custom_dropdown'),
        flyoutElNav_link = document.querySelectorAll('.custom_dropdown .nav-link'),
        childelem = document.querySelectorAll('.dropdown_container.children'),
        navbardropdowns=document.querySelectorAll('.navbar .custom_dropdown a');
            navbardropdowns&&navbardropdowns.forEach((elem)=>elem.classList.remove('active_master'));
            flyoutEl.remove();
            childelem&&childelem.forEach((elem)=>elem.remove());
      }
    const getboundingpoints = (e,title="",children,dropdowns,sendactive=null, history) => {
        e.preventDefault();
        let dropdownelems=e.currentTarget&&e.currentTarget.classList&&e.currentTarget.parentElement,
        dropdown_floating_items=dropdownelems&&dropdownelems.querySelectorAll('.dropdown-item');
        dropdown_floating_items&&dropdown_floating_items.forEach((elem)=>elem.classList.remove('active_children'))
        // console.log("dropdowns",dropdownelems)
    	// document.removeEventListener("click",eventlistenerhandler);
        let boundingpoints = e.currentTarget.getBoundingClientRect();
        // console.log('e.currentTarget',)
        let parenttext=e.currentTarget.innerText;
        let boundingpointsForParent = document.querySelector('.dropdown_container.parent')&&document.querySelector('.dropdown_container.parent').getBoundingClientRect();
        // console.log('boundingpoints',boundingpoints);
        // let parenttext=document.querySelector('.dropdown_container.parent')&&
        let lastdropdown=!dropdowns || (dropdowns&&dropdowns.length==0);
        let createElem = document.createElement('div');
        createElem.setAttribute('class', `dropdown_container ${children?`children ${lastdropdown?'last':''}`:`parent`}`);
        createElem.setAttribute('title_nav',`${children?parenttext:parenttext}`)
        let getparentWidth=boundingpointsForParent?boundingpointsForParent.width:0;
        createElem.style.top=(children?(boundingpoints.y):(boundingpoints.top+boundingpoints.height+boundingpoints.y))+"px";
        createElem.style.left=(children?((getparentWidth+boundingpoints.left)):boundingpoints.left)+"px";
        let checkDom = document.querySelector('.dropdown_container');
        let childelem = document.querySelectorAll('.dropdown_container.children');
        let childelem_all = document.querySelectorAll('.dropdown_container');
        // if(sendactive){
            setTimeout(()=>{
            let parentactiveclass=document.querySelector('.dropdown_container.parent'),
            parentname=parentactiveclass&&parentactiveclass.getAttribute('title_nav'),
            navbardropdowns=document.querySelectorAll('.navbar .custom_dropdown a'),
            newchildelems=document.querySelectorAll('.dropdown_container.children'),
            dropdownchildrens_items=document.querySelectorAll('.custom_dropdown.dropdown-item'),
            setactivedrop=navbardropdowns&&navbardropdowns.forEach((node)=>{
                node.classList.remove('active_master');
                if(node.innerText==parentname){
                    node.classList.add('active_master')
                }
            }),
            setactivetrackdrop=newchildelems&&newchildelems.forEach((node)=>{
                let titlenav=node.getAttribute('title_nav'),
                drp_down_childrens=Array.prototype.find,
                findelem=drp_down_childrens.call(dropdownchildrens_items,(nodeelem)=>nodeelem.innerText==titlenav),
                parentElems=findelem&&findelem.parentElement&&findelem.parentElement.parentElement,
                childrens=parentElems&&parentElems.querySelectorAll('.dropdown-item');
                // console.log("childrens",parentElems);
                childrens&&childrens.forEach((nodechildren)=>{
                    if(nodechildren.innerText==titlenav){
                        nodechildren.classList.add('active_children');
                    }else{
                        nodechildren.classList.remove('active_children');
                    }
                })
            })
        },100)
        // }
 
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
				// console.log("arrayIndex",getIndex)
				// if(getIndex>-1){
				childelem&&childelem.forEach((elem,index)=>{
				if(index>getIndex){
					elem.remove();
				}
				});
        	}
            if(dropdowns){
                  ReactDOM.render(
                    <Dropdown history={history} dropdowns={dropdowns} title={title}/>,
                    children?document.body.appendChild(createElem):createElem
                );
              }

        	// },2000)
        } else {
            ReactDOM.render(
                <Dropdown history={history} dropdowns={dropdowns} title={title}/>,
                document.body.appendChild(createElem)
            );
        }
        
        // document.body.appendChild(dropdown);
    }
const CustomNavDropown = ({ title,dropdowns,sendactive,active_nav }) => {
    // console.log("dropdown_avail",active_nav)
    const history = useHistory();
    const checkdropdowncontainer=()=>{
        let dropdown_exists=document.querySelector('.dropdown_container')
        return dropdown_exists?true:null;
    }
    return (
        <div className={`custom_dropdown`} onMouseOver={(e)=>checkdropdowncontainer()&&getboundingpoints(e,title,null,dropdowns,sendactive,history)} onClick={(e)=>getboundingpoints(e,title,null,dropdowns,sendactive,history)}>
				  <Nav.Link >{title}</Nav.Link>
			</div>
    )
}
const sendNavLink = (obj,history) => {
    history && history.push(obj.href);
    removeEveryDropdowns("");
}
export const Dropdown = ({title,dropdowns,sendactive=null,parent, history}) => {
    console.log('history', history)
	useEffect(()=>{
		document.addEventListener("click",(e)=>eventlistenerhandler(e,sendactive));
        document.addEventListener("mouseover",(e)=>eventlistenerhandler(e,sendactive));

		// return document.removeEventListener("click",eventlistenerhandler);
	},[title])
    // console.log('parent',parent)
    return (
        <div className={`dropdown_layer`}>
        {dropdowns&&dropdowns.map((obj)=>{
        	return obj.children? <div className="dropdown_layer_nav"><NavDropdown.Item  className={`custom_dropdown `}  onMouseOver={(e)=>getboundingpoints(e,title,true,obj.children,null,history)}>{obj.title}</NavDropdown.Item><i onClick={(e)=>e.stopPropagation()} onMouseOver={(e)=>e.stopPropagation()} className="children_arrow fas fa-angle-right"></i></div>:<NavDropdown.Item onClick={(e)=>sendNavLink(obj,history)} className="custom_dropdown" onMouseOver={(e)=>getboundingpoints(e,title,true,null,null,history)}>{obj.title}</NavDropdown.Item>
        })
        }	 
		</div>
    )
};
export default CustomNavDropown;