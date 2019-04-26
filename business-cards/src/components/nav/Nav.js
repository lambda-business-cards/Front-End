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
        <Link className='link' to="/protected">Cards</Link>
        <Link className='link' to="/addCard">Add</Link>
        <Link className='link' to="/qrScan">Scan</Link>
        <Link className='link' to="/login">Login</Link>
        <Link className='link' to="/user">Sign Up</Link>
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