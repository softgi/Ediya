import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Navigation2 = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div class="nav2">
      <Navbar color="light" light expand="md">
      <Link to="/" className="link">
        <NavbarBrand >EDIYA</NavbarBrand>
        <NavbarToggler onClick={toggle} /></Link> 
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <Link to="/about" className="link">
            <NavItem>
              <NavLink >About us</NavLink>
            </NavItem>
            </Link>
            <Link to="/menu" className="link">
            <NavItem>
              <NavLink >MENU</NavLink>
            </NavItem>
            </Link>
            <Link to="/board" className="link">
            <NavItem>
              <NavLink >고객의 소리</NavLink>
            </NavItem>
            </Link>
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation2;