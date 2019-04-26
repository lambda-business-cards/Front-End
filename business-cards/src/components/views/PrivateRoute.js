import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom';


export default withRouter(function PrivateRoute({ component: Component, ...rest}) {
  return(
    <div>
      
      <Route {...rest} render={() => {
        if (localStorage.getItem('token'))
          return <Component {...rest} />
        return <Redirect to='/login' />
      }}/>
  
    </div>
  )
})

