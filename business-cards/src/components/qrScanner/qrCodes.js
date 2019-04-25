import React from 'react';
import CardList from '../cards/CardsList';

class QrCodeAccess extends React.Component {
  render(){
    console.log(QrCodeAccess)
    return(
      <div className="qr-code-list">
        <div>
          <CardList qrCode={this.props.params.qr_url} />
        </div>
      </div>
    )
  }
}

export default QrCodeAccess;