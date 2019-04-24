import React from 'react';
import {Route, Link} from 'react-router-dom';
import './Nav.css';

const Navbar = () =>{
  return(
    <div>
    <nav class="navbar fixed-top navbar-dark">
      {!localStorage.getItem('token') && (<div className="btn">
          <Link className="link" to="/login">Login</Link>
          <Link className="link" to="/signup">Signup</Link>
        </div>)}
    </nav>
    </div>
  )
}

export default Navbar
