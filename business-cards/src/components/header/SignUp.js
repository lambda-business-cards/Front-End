import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createUser } from '../../actions'
import { Form, Row, Col, Button } from 'react-bootstrap';

//style

const SignUpCard = styled.div`
  width: 400px;
  height: 400px;
  margin: 0 auto;
  text-align: center;
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
      <SignUpCard>
        <h4>Register for you new Account!</h4>
        <Form onSubmit={this.handleNewUser}>
          <Form.Group as={Row} controlId="username">
          <Form.Label column sm={2}>
            User Name
          </Form.Label>
          <Col sm={10}>
          <Form.Control type='text'
                name='username'
                placeholder='user name'
                value={this.state.credentials.username}
                onChange={this.handleChange} />
            </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
          <Form.Control         
              type='text'
              name='email'
              placeholder='email'
              value={this.state.credentials.email}
              onChange={this.handleChange} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="phone">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control type='text'
                    name='phone'
                    placeholder='phone number'
                    value={this.state.credentials.phone}
                    onChange={this.handleChange} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="password">
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control type='text'
                    name='password'
                    placeholder='password'
                    value={this.state.credentials.password}
                    onChange={this.handleChange} />
          </Col>
        </Form.Group>
 
        <Form.Group as={Row} controlId="formHorizontalCheck">
          <Col sm={{ span: 10, offset: 2 }}>
            <Form.Check label="Remember me" />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            
            <Button type="submit" variant="outline-secondary">Register</Button>
          </Col>
        </Form.Group>
      </Form>;
      </SignUpCard>
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

