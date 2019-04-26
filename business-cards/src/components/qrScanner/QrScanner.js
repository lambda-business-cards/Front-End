import React from 'react';

import QrReader from 'react-qr-reader';
import { connect } from 'react-redux';
import { addCard } from '../../actions';


class QrScanner extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 500,
      result: 'No result',
      scanFinished: false
      }
    }


    handleScan = (result) => {
      if (result && !this.state.scanFinished){
        console.log("this is scanner", result)
        this.setState({ result, scanFinished: true }, 
          () => {
            this.props.addCard(result)
            .then(() => {this.props.history.push('/protected')})
          })
      }
    }

    handleError(err){

      console.log(err)
    }




    render(){
      const previewStyle = {
        height: 240,
        width: 320,
      }
      
      return(
        
        <div className='scanner-container'>
          <QrReader 
            className='scanner'
            delay={this.state.delay}
            style={previewStyle}
            onError={this.handleError}
            onScan={this.handleScan}
          />
          <div className='scanner-result'>
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
  
  export default connect (mapStateToProps, { addCard })(QrScanner)


