import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { login } from '../../actions'

//style

const LogInForm = styled.form`
  width: 400px;
  height: 400px;
  background-color: silver;
  margin: 0 auto;
`


class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      credentials: {
        username: '',
        password: ''
      }
    }
  }

  // handleChange = e => {
  //   this.setState({
  //     credentials: {
  //       ...this.state.credentials,
  //       [e.target.name]: e.target.value
  //     }
  //   })
  // }

  // handleLogin = e => {
  //   e.preventDefault();
  //   this.props.handleLogin(this.state.credentials)
  //     .then(() => this.props.history.push('/protected'))
  // }

  render() {
    return(
      <LogInForm>
        <div className='login-card'>
          <h2>Please Sign In</h2>
          <form 
            // onSubmit={this.login}
          >
          <h3>What is your username?</h3>
            <input 
              type='text'
              name='username'
              placeholder='User Name'
              // value={this.state.credentials.username}
              // onChange={this.handleChange}
            />
            <h3>Do you have a Boss password?</h3>
            <input 
              type='text'
              name='password'
              placeholder='Password'
              // value={this.state.credentials.username}
              // onChange={this.handleChange}
            />
            <button>Sign In</button>
            <br/>
            <p>Forgot your password?</p>
            <p>Reset my password</p>
          </form>
        
        </div>
      </LogInForm>
    )
  }
}

const mapStateToProps = state => {
  return {
    fetchingData: state.fetchingData,
    error: state.error
  }
}

export default connect (mapStateToProps, { login })(Login)

