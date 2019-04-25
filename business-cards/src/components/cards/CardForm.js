import React from 'react';
import { connect } from 'react-redux';
import { createCard } from '../../actions'

class CardForm extends React.Component {
  constructor() {
    super()
    this.state = {
      business_name: '',
      contact_name:'',
      email: ''
    };
  }

 
  handleNewInput = e => {
    this.setState({ [e.target.name]: e.target.value})
  };

  addCard = () => {
    const { business_name, contact_name, email } = this.state;
    this.props.createCard({ business_name, contact_name, email });
    this.setState({ business_name: '', contact_name: '', email: '' })
  }

  render(){
    return(
      <form className='new-card'>
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
      <button onClick={() => this.addCard()}
      type='button'>Add New Card</button>
      </form>
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