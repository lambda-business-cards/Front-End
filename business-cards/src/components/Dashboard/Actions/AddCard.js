import React from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col'
import {Form, Button, Col, Row} from 'react-bootstrap';
import { connect } from "react-redux";
import { addCard } from "../../Actions/index";
import './AddCard.css';

class AddCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      businessName: "",
      contactName: "",
      email: "",
      phone: "",
      address: "",
      fax: "",
      webUrl: ""
    };
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = e => {
    console.log('btn clicked');
    e.preventDefault();
    this.props.addCard(this.state);
};

  render(){
    return(
      <div>
        <h1> Add Card Component</h1>
          <div className="addCardForm">
            <form onSubmit={this.handleSubmit}>
              <input
                className="card-input"
                value={this.state.business_name}
                name='business_name'
                type='text'
                placeholder="business Name"
                onChange={this.handleChange}
              />
              <input
                className='card-input'
                value={this.state.contact_name}
                name='contact_name'
                type='text'
                placeholder='contact name'
                onChange={this.handleChange}
              />
              <input
                className='card-input'
                value={this.state.email}
                name='email'
                type='text'
                placeholder='email'
                onChange={this.handleChange}
              />
              <input
                className='card-input'
                value={this.state.phone}
                name='phone'
                type='text'
                placeholder='phone'
                onChange={this.handleChange}
              />
              <input
                className='card-input'
                value={this.state.address}
                name='address'
                type='text'
                placeholder='address'
                onChange={this.handleChange}
              />
              <input
                className='card-input'
                value={this.state.fax}
                name='fax'
                type='text'
                placeholder='fax'
                onChange={this.handleChange}
              />
              <input
                className='card-input'
                value={this.state.web_url}
                name='website'
                type='text'
                placeholder='website'
                onChange={this.handleChange}
              />
                <button>
                  Add New Card
                </button>
            </form>
          </div>
      </div>
    )
  }
}

export default connect(null, {addCard})(AddCard);
