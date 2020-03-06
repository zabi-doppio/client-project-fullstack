import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 
} from 'reactstrap';

const NavBar= (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">DoppioZero Clients</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/clients">Clients</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Logout">Logout</NavLink>
            </NavItem>
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;