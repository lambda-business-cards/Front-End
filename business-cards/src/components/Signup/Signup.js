import React from 'react';
import styled from 'styled-components';
import { Button, Form } from 'reactstrap';
import axios from 'axios';

class Signup extends React.Component {
  constructor() {
      super();
      this.state = {
          username: '',
          email: '',
          password: '',
          phone: ''
      };
  }
  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value })
  };
  handlePassword = e => {
     e.preventDefault();
      axios
          .post('https://business-card-backend.herokuapp.com/api/users/register', this.state)
          .then(res => {
            this.props.history.push(`/login`);
         })
         .catch(err => console.log(err))
    }



  render(){
    return(
          <Form  onSubmit={this.handlePassword} className ='login-form'>
              <input
                  className='input'
                  type="text"
                  placeholder="username"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleInput}
              />
              <input
                  className ='input'
                  type= 'password'
                  placeholder= 'Password'
                  name='password'
                  value={this.state.password}
                  onChange={this.handleInput}
              />
              <input
                  className ='input'
                  type= 'email'
                  placeholder= 'Email'
                  name='email'
                  value={this.state.email}
                  onChange={this.handleInput}
              />
              <input
                  className ='input'
                  type= 'text'
                  placeholder= 'Phone'
                  name='phone'
                  value={this.state.phone}
                  onChange={this.handleInput}
              />

              <Button className="btn" color = 'success' onClick={this.handlePassword}>Sign Up</Button>
          </Form>
    );
  }
}

export default Signup;
