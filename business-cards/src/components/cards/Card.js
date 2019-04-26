import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

//style

const CardsStyled = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: column;
justify-content: space-around;
align-items: center;


`

const Cards = (props) => {
  return(
    <CardsStyled> 
      <Card style={{ width: '30rem' }}>
        <Card.Body>
          <Card.Title>{props.card.business_name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{props.card.contact_name}</Card.Subtitle>
          <Card.Text>
          <div> {props.card.address}</div>
          <div> {props.card.fax}</div>
          <div> {props.card.web_url}</div>
          <div> {props.card.email} </div>
          <div> {props.card.phone} </div>
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
        </Card.Body>
      </Card>
      <div>
      <img src={props.card.qr_url} alt='' />
      </div>
    </CardsStyled>
    
  )
}

export default Cards;