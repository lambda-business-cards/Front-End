import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createUser } from '../../actions'

//style

const SignUpForm = styled.div`
  width: 400px;
  height: 400px;
  background-color: silver;
  margin: 0 auto;
`


class SignUp extends React.Component {
  constructor() {
    super()
    this.state = {
      credentials: {
        username: '',
        email: '',
        password: '',
        phone:''
      }
    }
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  handleNewUser = e => {
    e.preventDefault();
    this.props.createUser(this.state.credentials)
      .then(() => this.props.history.push('/protected'))
  }

  render() {
    return(
      <SignUpForm>
        <div className='login-card'>
          <h2>Register for you new Account!</h2>
          <form 
            onSubmit={this.handleNewUser}
          >
          <h4>Lets choose a Unique Username!</h4>
            <input 
              type='text'
              name='username'
              placeholder='User Name'
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
          <h4>Please use a valid email</h4>
            <input 
              type='text'
              name='email'
              placeholder='Email'
              value={this.state.credentials.email}
              onChange={this.handleChange}
            />
          <h4>Create a unique password to protect your account</h4>
            <input 
              type='text'
              name='password'
              placeholder='Password'
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
          <h4>Please add your Phone Number</h4>
            <input 
              type='text'
              name='phone'
              placeholder='Phone Number'
              value={this.state.credentials.phone}
              onChange={this.handleChange}
            />
            <button>Register</button>
            
          </form>
        
        </div>
      </SignUpForm>
    )
  }
}

const mapStateToProps = state => {
  return {
    fetchingData: state.creatingUser,
    error: state.error
  }
}

export default connect (mapStateToProps, { createUser })(SignUp)

