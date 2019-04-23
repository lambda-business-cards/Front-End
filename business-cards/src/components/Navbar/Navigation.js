import React from 'react';
import {Route, Link} from 'react-router-dom';

const Navbar = () =>{
  return(
    <div>
    <nav class="navbar fixed-top navbar-dark">
      <Link className="link" to="/login">Login</Link>
      <Link className="link" to="/signup">Signup</Link>
    </nav>
    </div>
  )
}

export default Navbar
