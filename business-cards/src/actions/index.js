//actions
import axios from 'axios'

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const CREATE_USER_START = 'CREATE_USER_START';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';

export const CREATE_CARD_START = 'CREATE_CARD_START';
export const CREATE_CARD_SUCCESS = 'CREATE_CARD_SUCCESS';
export const CREATE_CARD_FAILURE = 'CREATE_CARD_FAILURE';

export const ADD_CARD_START = 'ADD_CARD_START';
export const ADD_CARD_SUCCESS = 'ADD_CARD_SUCCESS';
export const ADD_CARD_FAILURE = 'ADD_CARD_FAILURE';

// export const DELETE_CARD_START = 'DELETE_CARD_START';
// export const DELETE_CARD_SUCCESS = 'DELETE_CARD_SUCCESS';
// export const DELETE_CARD_FAILURE = 'DELETE_CARD_FAILURE';

export const createCard = (card) => {
  
  return dispatch => {
    dispatch({ type: CREATE_CARD_START });

    return axios.post('https://business-card-backend.herokuapp.com/api/cards', card, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
      .then(({ data }) => {
        dispatch({ 
          type: CREATE_CARD_SUCCESS, 
          payload: data 
        })
      })
      .catch(err => {
        dispatch({ 
          type: CREATE_CARD_FAILURE,
        payload: 'Error Unable to Create Card'
        })
      })
  }
}

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });

  axios.get('https://business-card-backend.herokuapp.com/api/cards', {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  })
    .then(res => dispatch({
      type: FETCH_DATA_SUCCESS,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: FETCH_DATA_FAILURE,
      payload: 'Error! Unable to Fetch API'
    }))
}


export const createUser = (newUser) => {
  
  return dispatch => {
    dispatch({ type: CREATE_USER_START });

    return axios.post('https://business-card-backend.herokuapp.com/api/users/register', newUser)
      .then(({ data }) => {
        dispatch({ 
          type: CREATE_USER_SUCCESS, 
          payload: data 
        })
      })
      .catch(err => {
        dispatch({ 
          type: CREATE_USER_FAILURE,
        payload: 'Error Unable to Create Card'
        })
      })
  }
}

export const login = (credentials) => dispatch => {
  dispatch({ type: LOGIN_START })

  return axios.post('https://business-card-backend.herokuapp.com/api/users/login', credentials)
    .then(res => dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: LOGIN_FAILURE,
      payload: 'Error Unable to log in!'
    }))
}



export const addCard = (id) => {
  
  return dispatch => {
    dispatch({ type: ADD_CARD_START });

    return axios.post('https://business-card-backend.herokuapp.com/api/cards/save', {card_id: id}, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
      .then(({ data }) => {
        dispatch({ 
          type: ADD_CARD_SUCCESS, 
          payload: data 
        })
      })
      .catch(err => {
        dispatch({ 
          type: ADD_CARD_FAILURE,
        payload: 'Error Unable to Upload Scanned Card'
        })
      })
  }
}

// export const deleteCard = (card) => {
  
//   return dispatch => {
//     dispatch({ type: DELETE_CARD_START });

//     return axios.post('https://business-card-backend.herokuapp.com/api/cards', card, {
//       headers: {
//         Authorization: localStorage.getItem('token')
//       }
//     })
//       .then(({ data }) => {
//         dispatch({ 
//           type: DELETE_CARD_SUCCESS, 
//           payload: data 
//         })
//       })
//       .catch(err => {
//         dispatch({ 
//           type: DELETE_CARD_FAILURE,
//         payload: 'Error Unable to Create Card'
//         })
//       })
//   }
// }




