import React,{useState} from 'react';
import {Nav,Navbar,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import CustomNavDropown from '@components/CustomNavDropdown';
import {MasterMenu} from '@components/dropdowns';
const Header = () => {

  // const dropdowns=[{title:"Item Master",children:[{title:'menu1',children:[{title:"menu3"}]},{title:'menu2'},{title:'menu3'}]},{title:"Menu Master",children:[{title:'menu1.1'},{title:'menu2.1'},{title:'menu3.1',children:[{title:"menu3"}]}]}]

    // <CustomNavDropown title="Transaction" dropdowns={dropdowns} />
    // <CustomNavDropown title="Reports" dropdowns={null} />
    return (
        <Navbar className="custom_header" bg="dark" expand="lg" variant="dark">
  <Navbar.Brand href="#home">MIS</Navbar.Brand>
    <CustomNavDropown title="Master" dropdowns={MasterMenu} />
    <Nav className="mr-auto"></Nav>
    <Navbar.Text>
      Signed in as: <a href="#login">Mark Otto</a>
    </Navbar.Text>
</Navbar>
    );
};


export default Header;
