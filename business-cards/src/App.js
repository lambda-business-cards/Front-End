import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import PrivateRoute from './components/views/PrivateRoute';
import CardsList from './components/cards/CardsList';
import Search from './components/header/Search';
import Login from './components/header/Login';
import Logo from './components/header/Logo';




import './App.css';


export const App = (props) => {
  
    return (
      <BrowserRouter>
      <div className='body'>

        <div className='header-container'>

            <div className="logo">
              <Logo />
            </div>
            <div className='search'>
              <Search />
            </div>
            <div>
              <Link to='/login'>Login/SignUp</Link>
              <Route 
                exact path='/login' 
                component={Login} 
              />
            </div>
            
        </div>

        <div className="nav-card">
          <nav className="nav">
            <div>
              <Link to='/protected'>Home</Link>
            </div>
          </nav>
        </div>

        <div className='main-body'>  
           <PrivateRoute 
            exact path= '/protected'
            component={CardsList} 
          />
        </div>

      </div>
    </BrowserRouter>
    );
  
}

export default App;
