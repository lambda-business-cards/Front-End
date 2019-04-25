import React from "react";
import { connect } from "react-redux";

 const Card = props => {
  return (
    <div>
    <p>{props.card.business_name}</p>
    <p>{props.card.contact_name}</p>
    	<p>{props.card.email}</p>
    	<p>{props.card.phone}</p>
    	<p>{props.card.address}</p>
    	<p>{props.card.fax}</p>
    	<p>{props.card.web_url}</p>
    </div>
  );
};

 export default connect()(Card);
