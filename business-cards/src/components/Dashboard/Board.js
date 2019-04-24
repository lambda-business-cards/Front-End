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
import './Board.css'


class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: ''
    }
  }

  componentDidMount(){
   var token = localStorage.getItem(`token`)
   var id = localStorage.getItem(`id`)
   var request = {
     headers: { Authorization : token },
   }
   axios
     .post(`https://business-card-backend.herokuapp.com/api/users/login`, request)
     .then(res => {
       console.log('axios get req');
       this.setState({
         username: res.data,
       })

   })
   .catch(err => console.log(err))
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
        </div>
      </div>
    )
  }
}

export default Board;
