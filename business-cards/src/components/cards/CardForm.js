import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createCard } from '../../actions'
import { Button, Form, Col } from 'react-bootstrap';

//style
const FormCard = styled.div`
  width: 400px;
  height: 400px;
  margin: 0 auto;
  text-align: center;
`

class CardForm extends React.Component {
  constructor() {
    super()
    this.state = {
      business_name: '',
      contact_name:'',
      email: '',
      phone: '',
      address: '',
      fax: '',
      web_url: ''
    };
  }

 
  handleNewInput = e => {
    this.setState({ [e.target.name]: e.target.value})
  };

  addCard = () => {
    const { 
      business_name, 
      contact_name, 
      email, phone, address, fax, web_url } = this.state;
    this.props.createCard({ business_name, contact_name, email, phone, address, fax, web_url });
    this.setState({ business_name: '', contact_name: '', email: '', phone: '', address: '', fax: '', web_url: '' })
  }

  render(){
    return(
      <FormCard>
      <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="business_name">
      <Form.Label>Business Name</Form.Label>
      <Form.Control className='card-input'
        value={this.state.business_name}
        name='business_name'
        type='text'
        placeholder='business name'
        onChange={this.handleNewInput}  />
    </Form.Group>

    <Form.Group as={Col} controlId="contact_name">
      <Form.Label>Contact Name</Form.Label>
      <Form.Control className='card-input'
        value={this.state.contact_name}
        name='contact_name'
        type='text'
        placeholder='contact name'
        onChange={this.handleNewInput} />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="email">
    <Form.Label>Email</Form.Label>
    <Form.Control className='card-input'
        value={this.state.email}
        name='email'
        type='text'
        placeholder='email'
        onChange={this.handleNewInput} />
  </Form.Group>

  <Form.Group controlId="address">
    <Form.Label>Address</Form.Label>
    <Form.Control className='card-input'
        value={this.state.address}
        name='address'
        type='text'
        placeholder='address'
        onChange={this.handleNewInput}  />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="fax">
      <Form.Label>Fax</Form.Label>
      <Form.Control className='card-input'
        value={this.state.fax}
        name='fax'
        type='text'
        placeholder='fax'
        onChange={this.handleNewInput} />
    </Form.Group>

    <Form.Group as={Col} controlId="website">
      <Form.Label>Website</Form.Label>
      <Form.Control className='card-input'
        value={this.state.web_url}
        name='web_url'
        type='text'
        placeholder='website'
        onChange={this.handleNewInput}/>
    </Form.Group>
  </Form.Row>


  <Button onClick={() => this.addCard(this.props.history.push('/protected'))}variant="outline-secondary">Create Card</Button>
</Form>;
</FormCard>

    )
  }
}

const mapStateToProps = state => {
  return{
    error: state.error,
    creatingCard: state.creatingCard
  }
}

export default connect (mapStateToProps, { createCard })(CardForm)



{/* <form className='new-card'>
      <input
        className='card-input'
        value={this.state.business_name}
        name='business_name'
        type='text'
        placeholder='business name'
        onChange={this.handleNewInput} 
      />
      <input
        className='card-input'
        value={this.state.contact_name}
        name='contact_name'
        type='text'
        placeholder='contact name'
        onChange={this.handleNewInput} 
      />
      <input
        className='card-input'
        value={this.state.email}
        name='email'
        type='text'
        placeholder='email'
        onChange={this.handleNewInput} 
      />
      
      <Button onClick={() => this.addCard()}variant="outline-secondary">Create Card</Button>
      </form> */}