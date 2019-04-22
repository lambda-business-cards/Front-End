import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


import Login from './components/Login/Login';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "Business Card Org"
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
      this.setState({ })
      console.log(res)
    })

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.title}
        </header>
        <Login />
      </div>
    );
  }
}

export default App;
