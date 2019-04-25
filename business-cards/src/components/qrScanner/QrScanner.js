import React from 'react';
import QrReader from 'react-qr-reader';

class QrScanner extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 500,
      result: 'No result'
      }
    }


    handleScan = (result) => {
      if (result){
        this.setState({ result })
      }
    }

    handleError(err){
      console.log(err)
    }




    render(){
      const previewStyle = {
        height: 240,
        width: 320
      }
      return(
        
        <div>
          <QrReader 
            delay={this.state.delay}
            style={previewStyle}
            onError={this.handleError}
            onScan={this.handleScan}
          />
          <p>{this.state.result}</p>
        </div>
      )
    }
  }

  export default QrScanner
