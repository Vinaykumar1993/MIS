import React from 'react';
import {Nav,Navbar,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
const Header = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
  <Navbar.Brand href="#home">MIS</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto"></Nav>
    <Navbar.Text>
      Signed in as: <a href="#login">Mark Otto</a>
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>
    );
};


export default Header;
