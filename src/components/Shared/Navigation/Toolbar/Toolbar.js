import React, { useState } from 'react';
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, InputGroup, InputGroupAddon, InputGroupText, Input
} from 'reactstrap';

const toolbar = React.memo(() => {
    const [ isOpen, setIsopen ] = useState(false)

    const toggle = () => {
        setIsopen(!isOpen)
    }
    return (
        <Navbar style={{backgroundColor: '#092e42'}} className="fixed-top" expand="md">
        <NavbarBrand className="text-capitalize text-light font-weight-bold" href="/">Saka</NavbarBrand>
        <NavbarToggler onClick={toggle} style={{border: '2px solid #092e42'}}>
          <span style={{backgroundImage: "url('https://mdbootstrap.com/img/svg/hamburger7.svg?color=ffffff')"}} className="navbar-toggler-icon"></span>
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="text-light" href="/components/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-light" href="/">All Businesses</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-light" href="/">Town</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-light" href="/">Travel</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-light" href="/">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-light" href="/">Logout</NavLink>
            </NavItem>
          </Nav>
          <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Search ..." />
      </InputGroup>
        </Collapse>
      </Navbar>
    );
})

export default toolbar;