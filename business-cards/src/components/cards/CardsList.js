import React from 'react'

import Card from './Card';
import CardForm from './CardForm';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getData } from '../../actions'

class CardsList extends React.Component {

  componentDidMount() {
    this.props.getData();
  }

  render() {
    return(
      <div className="card-list-container">
        <div>
          {this.props.cards.map(card => {
            return <Card key={card.id} card={card} />
          })}
        </div>
        <div>
        <CardForm {...this.props} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ cards, fetchingData }) => ({
  cards,
  fetchingData
})

export default withRouter(
  connect(
    mapStateToProps, 
    { getData }
  )( CardsList )
)