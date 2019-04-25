import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//stye
const Dash = styled.div`
display: flex;
justify-content: space-around;
margin: 1rem;
`

function DashBoard() {
  return(
    <Dash>
      <div>
          <Link to='/protected'>Home</Link>
        </div>
        <div>
        <Link to='/qrScan'>Scan Card</Link>
        </div>
     </Dash>
  )
}

export default DashBoard;