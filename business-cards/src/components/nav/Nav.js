import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';

//style
const NavBar = styled.nav`
display: flex;
justify-content: space-around;
margin: 1rem;
`



function CardNav() {
  return(
    <div>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand to='/protected'>Card Boss</Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/protected">Cards</Link>
        <Nav.Link href="/addCard">Add</Nav.Link>
        <Nav.Link href="/qrScan">Scan</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/user">Sign Up</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
    </div> 
      
        
  )
}

export default CardNav;