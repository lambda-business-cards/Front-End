import React from 'react';
import axios from 'axios';
import { Route, Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AddCard from './Actions/AddCard';
import DeleteCard from './Actions/DeleteCard';
import UpdateCard from './Actions/UpdateCard';
import User from './Actions/User';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import PrivateRoute from '../Login/PrivateRoute';
import './Board.css';
import { getCards } from "../Actions/index";
import Card from "./Actions/Card";
import {connect} from 'react-redux';

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
    }
  }

  componentDidMount(){
   var token = localStorage.getItem(`token`)
   var id = localStorage.getItem(`id`)
   var request = {
     headers: { Authorization : token },
   }

   this.props.getCards()
 }

  render(){
    console.log(this.props);
    return(
      <div className="dashboard">
        <div className="user">
          Hello: {localStorage.getItem('username')}

          <div>
            <ul>
              <li>
                <Link to="/add">
                  Add Card
                </Link>
              </li>
              <li>
                <Link to="/update">
                  Update Card
                </Link>
              </li>
              <li>
                <Link to="/delete">
                  Delete Card
                </Link>
              </li>
              <li>
                <Link to="/user">
                  Account
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="boardCards">
          <p>
            {this.props.cards.map(( card, index) => {
            return <Card card={card} key={index}/>
          })}</p>
        </div>
      </div>
    )
  }
}

function mstp(state) {
  return {
    cards: state.cards
  };
}




export default connect( mstp ,{ getCards })(Board)
