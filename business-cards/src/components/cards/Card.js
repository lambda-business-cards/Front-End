import React from 'react';

const Card = (props) => {
  return(
    <div className="card-view"> 
      <div> {props.card.username}</div>
      <div> {props.card.email} </div>
      <div> {props.card.phone} </div>
    </div>
    
  )
}

export default Card;