import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "Business Card Org"
    }
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
