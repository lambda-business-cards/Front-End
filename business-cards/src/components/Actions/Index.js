import axios from "axios";

export {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './Login';

export const ADD_CARD = "ADD_CARD";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";
export const FETCH_CARDS= "FETCH_CARDS";
export const CREATE_CARD_SUCCESS = "CREATE_CARD_SUCCESS";

export const addCard = card => dispatch => {
  console.log('addCard posted');
  dispatch({ type: ADD_CARD});
    axios
      .post("https://business-card-backend.herokuapp.com/api/cards", card, { headers: { Authorization: localStorage.getItem('token')}})
      .then(({ data }) => {
        dispatch({
          type: CREATE_CARD_SUCCESS,
          payload: data
        })
      })
      .catch(err => {
        dispatch({type: ERROR, payload: err})
      });
};


export const getCards = () => dispatch => {
  dispatch({ type: FETCH_CARDS });

  var request = {
    headers: { Authorization : localStorage.getItem('token')},
  }

  axios
    .get("https://business-card-backend.herokuapp.com/api/cards", request)
    .then(res => {
      console.log(res);
      dispatch({ type: SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ERROR, payload: err });
    });
};
