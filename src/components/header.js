import React from 'react';
import {Nav,Navbar,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import CustomNavDropown from '@components/CustomNavDropdown';
const Header = () => {
  const dropdowns=[{title:"Item Master",children:[{title:'menu1',children:[{title:"menu3"}]},{title:'menu2'},{title:'menu3'}]},{title:"Menu Master",children:[{title:'menu1.1'},{title:'menu2.1'},{title:'menu3.1',children:[{title:"menu3"}]}]}]
    return (
        <Navbar className="custom_header" bg="dark" expand="lg" variant="dark">
  <Navbar.Brand href="#home">MIS</Navbar.Brand>
    <CustomNavDropown title="Master" dropdowns={dropdowns}/>
    <CustomNavDropown title="Transaction" dropdowns={dropdowns}/>
    <CustomNavDropown title="Reports" dropdowns={[]}/>
    <Nav className="mr-auto"></Nav>
    <Navbar.Text>
      Signed in as: <a href="#login">Mark Otto</a>
    </Navbar.Text>
</Navbar>
    );
};


export default Header;
