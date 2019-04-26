import React from "react";
import { connect } from "react-redux";

 const Card = props => { console.log(props)
  return (
    <div className="card-view">
    <div> {props.card.business_name}</div>
      <div> {props.card.contact_name}</div>
      <div> {props.card.address}</div>
      <div> {props.card.fax}</div>
      <div> {props.card.web_url}</div>
      <div> {props.card.email} </div>
      <div> {props.card.phone} </div>
      <img src={props.card.qr_url}/>
    </div>
  );
};

 export default connect(null, null)(Card);
