import React from 'react';
// import { Route, Redirect } from 'react-router-dom'

export default function PrivateRoute({ component: Component, ...rest}) {
  return(
    <div>
      <h1>Private Route Component</h1>
      {/* <Route {...rest} render={() => {
        if (localStorage.getItem('token'))
          return<Component />
        return <Redirect to='/login' />
      }}/> */}
    </div>
  )
}

