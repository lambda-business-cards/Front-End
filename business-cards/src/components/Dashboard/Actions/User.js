import React from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col'
import {Form, Button, Col, Row} from 'react-bootstrap';

class User extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div>
        <div className="board">
          <Form>
            <Button variant="primary" type="submit">
                Submit Changes
            </Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default User;
