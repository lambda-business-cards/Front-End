import React from 'react';
import styled from 'styled-components';

import { Route, Redirect } from 'react-router-dom';

import Card from './Card';
import CardForm from './CardForm';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getData } from '../../actions'

//style
const DashBoard= styled.div`
background: red;
`

class CardsList extends React.Component {

  componentDidMount() {
    this.props.getData();
  }

  render() {
    console.log(this.props)
    return(
      <DashBoard>
        <div className="card-list-container">
        <p>List component</p>
          <div>
            {this.props.cards.map(card => {
              return <Card key={card.id} card={card} />
            })}
          </div>
          <div>
            {this.props.savedCard.map(card => {
              return <Card key={card.id} card={card} />
            })}
          </div>
          <div>
          <CardForm {...this.props} />
          </div>
        </div>
      </DashBoard>
    )
  }
}


const mapStateToProps = ({ cards, savedCard, fetchingData }) => ({
  savedCard,
  cards,
  fetchingData
})

export default withRouter(
  connect(
    mapStateToProps, 
    { getData }
  )( CardsList )
)

