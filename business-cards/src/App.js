import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import PrivateRoute from './components/header/PrivateRoute';
import CardsList from './components/cards/CardsList';
import Search from './components/header/Search';
import Login from './components/header/Login';
import Logo from './components/header/Logo';



import './App.css';


export const App = () => {
  
    return (
      <BrowserRouter>
      <div className='Header'>
        <Logo />
        <Search />
        
        <div>
          <Link to='/login'>Login</Link>
        </div>
         <div>
           <Link to='/protected'>Private</Link>
         </div>
         
        <Route 
          path='/login' 
          component={Login} 
        />

        <PrivateRoute 
          exact path= '/protected' 
          component={CardsList} 
        />
      </div>
    </BrowserRouter>
    );
  
}

export default App;
