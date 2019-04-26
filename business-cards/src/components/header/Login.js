import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { login } from '../../actions';
import { Form, Button } from 'react-bootstrap';
//style

const LogInCard = styled.div`
  width: 400px;
  height: 400px;
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

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state.credentials)
      .then(() => this.props.history.push('/protected'))
  }

  render() {
    return(
      <LogInCard>
        <h2>Please Sign In</h2>
      <Form onSubmit={this.handleLogin}>
        <Form.Group controlId="username">
          <Form.Label>User Name</Form.Label>
          <Form.Control type='text'
              name='username'
              placeholder='user name'
              value={this.state.credentials.username}
              onChange={this.handleChange} />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type='text'
              name='password'
              placeholder='password'
              value={this.state.credentials.password}
              onChange={this.handleChange} />
              
        </Form.Group>
        <Button variant="outline-secondary" type="submit">Log In</Button>
      </Form>
      </LogInCard>
      
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



