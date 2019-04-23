import React from 'react';
import axios from 'axios';
import {Route, Link} from 'react-router-dom';

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      plants: [],
    }
  }

  componentDidMount(){
   console.log('plants');
   var token = localStorage.getItem(`token`)
   var id = localStorage.getItem(`id`)
   var request = {
     headers: { authorization : token },
   }
   axios
     .get(`https://business-card-backend.herokuapp.com//api/cards`, request)
     .then(res => {
       console.log(res);
       this.setState({
         plants: res.data,
       })
   })
   .catch(err => console.log(err))
 }



  render(){
    console.log(this.state.plants)
    console.log(this.props);
    return(
      <div className="dashboard">
        <h1> Dashboard </h1>
        <h2> WELCOME</h2>

      </div>
    )
  }
}

export default Board;
