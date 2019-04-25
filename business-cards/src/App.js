import React from 'react';
import styled from 'styled-components';

import { BrowserRouter, Route, Link } from 'react-router-dom';

import PrivateRoute from './components/views/PrivateRoute';
import CardsList from './components/cards/CardsList';
import DashBoard from './components/dashBoard/DashBoard';
import SignUp from './components/header/SignUp';
import Footer from './components/footer/footer';
// import Search from './components/header/Search';
import Login from './components/header/Login';
// import Logo from './components/header/Logo';
import Nav from './components/nav/Nav';
import QrScanner from './components/qrScanner/QrScanner';

//style
import './App.css';



export const App = (props) => {
  
    return (
      <BrowserRouter>
      <div className='body'>

      <Nav />
      <DashBoard />

        <div className='main-body'>

           <PrivateRoute 
            exact path= '/protected'
            component={CardsList} 
           />
           <PrivateRoute
            path='/protected/:id'
            component={CardsList} 
            />
           <PrivateRoute
            exact path= '/qrScan'
            component={QrScanner} 
            />

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
