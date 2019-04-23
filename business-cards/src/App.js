import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Form from './components/Form/Form';
import Login from './components/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute';
import {Route, Link} from 'react-router-dom';
import Navbar from './components/Navbar/Navigation';
import Signup from './components/Signup/Signup';
import Board from './components/Dashboard/Board';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "Business Card Org",
    }
  }

  componentDidMount(){
    var token = localStorage.getItem(`token`)
    var req = {
      headers: { authorization : token }
    }
    axios
    .post("https://business-card-backend.herokuapp.com/api/users/login")
    .then(res => {
      this.setState({      })
      console.log(res)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.title}
        </header>
        <Navbar />
      <Route>
        <div className="form">
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
        </div>
        <PrivateRoute path="/dashboard" exact component={Board}/>

      </Route>
      </div>
    );
  }
}

export default App;
