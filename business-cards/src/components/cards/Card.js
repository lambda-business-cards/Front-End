import React from 'react';

const Card = (props) => {
  return(
    <div className="card-view"> 
      <div> {props.card.business}</div>
      <div> {props.card.name} </div>
    </div>
    
  )
}

export default Card;