import React from 'react';

import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';



function CardNav() {
  return(
    <div className='nav-container'>
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