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
        width: 320,
      }
      console.log("this is scanner", this.state.result)
      return(
        
        <div>
          <QrReader 
            delay={this.state.delay}
            style={previewStyle}
            onError={this.handleError}
            onScan={this.handleScan}
          />
          <div>
          <p>{this.state.result}</p>
          </div>
        </div>
      )
    }
  }

  export default QrScanner
