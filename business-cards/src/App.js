import React from 'react';
import styled from 'styled-components';

import { BrowserRouter, Route, Link } from 'react-router-dom';

import PrivateRoute from './components/views/PrivateRoute';
import CardsList from './components/cards/CardsList';
import SignUp from './components/header/SignUp';
import Footer from './components/footer/footer';
// import Search from './components/header/Search';
import Login from './components/header/Login';
// import Logo from './components/header/Logo';
import QrScanner from './components/qrScanner/QrScanner';
import './App.css';

//style

const NavBar = styled.nav`
display: flex;
justify-content: space-around;
margin: 1rem;
`


export const App = (props) => {
  
    return (
      <BrowserRouter>
      <div className='body'>

        <div className='header-container'>
          <NavBar>
            <div>
              <Link to='/login'>Login</Link>
              <Link to='/'>Log Out</Link>
              
              
              
            </div>
            <div>
            <Link to='/user'>Sign Up</Link>
            
            </div>
          </NavBar> 
            
        </div>

        <div className="nav-card">
          <nav className="nav">
            <div>
              <Link to='/protected'>Home</Link>
              <Link to='/qrScan'>Scan Card</Link>
            </div>
          </nav>
        </div>

        <div className='main-body'>  
           <PrivateRoute 
            exact path= '/protected'
            component={CardsList} 
           />
           <PrivateRoute
            exact path= '/qrScan'
            component={QrScanner} />

           <Route path='/user' component={SignUp}/>
           <Route 
                path='/login' 
                component={Login} 
              />
        </div>
        <div>
          <Footer />
        </div>

      </div>
    </BrowserRouter>
    );
  
}

export default App;
