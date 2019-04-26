import React from 'react';

import Cards from './Card';


import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getData } from '../../actions'



class CardsList extends React.Component {

  componentDidMount() {
    this.props.getData();
  }

  render() {
    console.log(this.props)
    return(
      
      <div className="card-list-container">
        
        <div>
        
          <div>
            {this.props.cards.map(card => {
              return <Cards key={card.id} card={card} />
            })}
          </div>
          <div>
            {this.props.savedCard.map(card => {
              return <Cards key={card.id} card={card} />
            })}
          </div>
          
        </div>
      </div>
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

