import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Login from './components/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute';
import { withRouter ,Router, Route, Link} from 'react-router-dom';
import Navbar from './components/Navbar/Navigation';
import Signup from './components/Signup/Signup';
import Board from './components/Dashboard/Board';
import AddCard from './components/Dashboard/Actions/AddCard';
import DeleteCard from './components/Dashboard/Actions/DeleteCard';
import UpdateCard from './components/Dashboard/Actions/UpdateCard';
import User from './components/Dashboard/Actions/User';



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
            <Navbar />
        </header>
          <Route>
              <div className="container app">
                <Route path="/login" exact component={Login} />
                <Route path="/signup" exact component={Signup} />
                <PrivateRoute path="/board" exact component={Board}/>
                <PrivateRoute path="/add" exact component={AddCard} />
                <PrivateRoute path="/delete" exact component={DeleteCard}/>
                <PrivateRoute path="/update" exact component={UpdateCard}/>
                <PrivateRoute path="/user" exact component={User}/>
              </div>
            </Route>
      </div>
    );
  }
}

export default App;
