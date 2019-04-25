import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

//style
const NavBar = styled.nav`
display: flex;
justify-content: space-around;
margin: 1rem;
`



function Nav() {
  return(
    
    <NavBar>
      <div>
        <Link to='/login'>Login</Link>
      </div>
      <div>
      <Link to='/'>Log Out</Link> 
      </div>
      <div>
      <Link to='/user'>Sign Up</Link>
      </div>
    </NavBar> 
      
        
  )
}

export default Nav;