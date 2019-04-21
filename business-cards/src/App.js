import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import CardsList from './components/CardsList';

import './App.css';

export const App = () => {
  
    return (
      <BrowserRouter>
        <div className="App">
          <p>I am the App Component</p>
          <ul>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/protected'>Private</Link>
            </li>
          </ul>
          <Route path='/login' component={Login} />
          <PrivateRoute exact path= '/protected' component={CardsList} />
        </div>
      </BrowserRouter>
    );
  
}

export default App;
