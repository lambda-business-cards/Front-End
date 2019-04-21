import React from 'react';
import { connect } from 'react-redux';
import { createCard } from '../actions'

class CardForm extends React.Component {
  constructor() {
    super()
    this.state = {
      someData: '',
      moreData:'',
      anotherData: ''
    };
  }

  handleNewInput = e => {
    this.setState({ [e.target.name]: e.target.value})
  };

  addCard = () => {
    const { someData, moreData, anotherData } = this.state;
    this.props.createCard({ someData, moreData, anotherData });
    this.setState({ someData: '', moreData: '', anotherData: '' })
  }

  render(){
    return(
      <form className='new-card'>
      <input
        className='card-input'
        value={this.state.name}
        name='someData'
        type='text'
        placeholder='someData'
        onChange={this.handleNewInput} 
      />
      <input
        className='card-input'
        value={this.state.name}
        name='moreData'
        type='text'
        placeholder='moreData'
        onChange={this.handleNewInput} 
      />
      <input
        className='card-input'
        value={this.state.name}
        name='anotherData'
        type='text'
        placeholder='anotherData'
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