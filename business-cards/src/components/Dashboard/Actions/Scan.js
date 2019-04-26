import React from 'react';
import { connect } from 'react-redux';
import { addCard } from "../../Actions/index";
import QrReader from 'react-qr-scanner'

class Scan extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      delay: 500,
      result: 'No result',
    }
    this.handleScan = this.handleScan.bind(this)
  }

  handleScan(data){
    this.setState({
      result: data,
    })
  }

  handleError(err){
    console.error(err)
  }

  render(){
    const previewStyle = {
      height: 240,
      width: 320,
    }

    return(
      <div>
        <div className="board">
          <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          />
         <p>{this.state.result}</p>
        </div>
      </div>
    )
  }
}

  const mapStateToProps = state => {
    return{
      error: state.error,
      addingCard: state.addingCard
    }
  }


export default connect(mapStateToProps, { addCard })(Scan);
