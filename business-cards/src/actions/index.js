//actions
import axios from 'axios'

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const CREATE_CARD_START = 'CREATE_CARD_START';
export const CREATE_CARD_SUCCESS = 'CREATE_CARD_SUCCESS';
export const CREATE_CARD_FAILURE = 'CREATE_CARD_FAILURE';

export const createCard = card => {
  const newCard = axios.post('#', card);
  return dispatch => {
    dispatch({ type: CREATE_CARD_START });
    newCard
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

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START })

  return axios.post('#', credentials)
    .then(res => dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: LOGIN_FAILURE,
      payload: 'Error Unable to log in!'
    }))
}

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });

  axios.get('#', {
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