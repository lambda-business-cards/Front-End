 import React from 'react';
import styled from 'styled-components';
import { Button, Form } from 'reactstrap';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux'
import './Login.css';

class Login extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        credentials: {
          username: '',
          password: '',
        }
      };
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
    console.log(this.state.credentials)
  }

  login = e => {
    e.preventDefault();
    console.log('inside the login function')
    axios.post('https://business-card-backend.herokuapp.com/api/users/login', this.state.credentials)
        .then(res => {
          localStorage.setItem("token", res.data.token);
          this.props.history.push(`/board`);
          localStorage.setItem('id', res.data.id);
          localStorage.setItem('username', res.data.username)
        })
         .catch(err => console.log(err))
  }

  render(){
    return(
          <Form  onSubmit={this.login} className =''>
              <input
                  className ='input'
                  type="text"
                  placeholder="username or email"
                  name="username"
                  value={this.state.credentials.username}
                  onChange={this.handleChange}
              />
              <input
                  className ='input'
                  type= 'password'
                  placeholder= 'Password'
                  name='password'
                  value={this.state.credentials.password}
                  onChange={this.handleChange}
              />

              <Button color="success">
           {this.props.loggingIn ? (
             <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
           ) : (
             "Log in"
           )}
         </Button>
          </Form>

    );
  }
}

export default Login;
