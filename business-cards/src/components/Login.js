import React from 'react'
import { connect } from 'react-redux';
import { login } from '../actions'


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
      <div className='login-card'>
        <form 
          // onSubmit={this.login}
        >
          <input 
            type='text'
            name='username'
            placeholder='User Name'
            // value={this.state.credentials.username}
            // onChange={this.handleChange}
          />
          <input 
            type='text'
            name='password'
            placeholder='Password'
            // value={this.state.credentials.username}
            // onChange={this.handleChange}
          />
          <button>Log In</button>
        </form>
      
      </div>
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

