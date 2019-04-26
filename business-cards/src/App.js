import React from 'react';


import { BrowserRouter, Route } from 'react-router-dom';

import PrivateRoute from './components/views/PrivateRoute';

import DashBoard from './components/dashBoard/DashBoard';
import SignUp from './components/header/SignUp';


import Login from './components/header/Login';

import CardNav from './components/nav/Nav';
import QrScanner from './components/qrScanner/QrScanner';
import CardForm from './components/cards/CardForm';

//style
import './App.css';



export const App = (props) => {
  
    return (
      <BrowserRouter>
      <div className='body'>

      <CardNav />
      

        <div className='main-body'>

          <PrivateRoute 
            exact path= '/addCard'
            component={CardForm} 
           />

           <PrivateRoute 
            exact path= '/protected'
            component={DashBoard} 
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
      </div>
    </BrowserRouter>
    );
  
}

export default App;
