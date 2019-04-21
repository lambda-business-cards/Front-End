import React from 'react';
import styled from 'styled-components';

//styles for this component

const Form = styled.form`
  width: 500px;
  height: 500px;
  background-color: gray;
  margin: 0 auto;
  margin-top: 50px;
`



class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div>
        <Form>
          <h1> Login </h1>
          <input placeholder="username" />

          <input placeholder="password"/>
        </Form>
      </div>
    )
  }
}

export default Login;
