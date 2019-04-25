import axios from "axios";

export {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from './Login';

export ADD_CARD = "ADD_CARD";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";
export const FETCH_CARDS= "FETCH_CARDS";

export const addCard = card => dispatch => {
  dispatch({ type: ADD_CARD});
    axios
      .post("https://business-card-backend.herokuapp.com/api/cards")
      .then(res => {
        dispatch({ type: SUCCESS, payload: res.data});
      })
      .catch(err => {
        dispatch({type: ERROR, payload: err})
      });
};


export const getCards = () => dispatch => {
  dispatch({ type: FETCH_CARDS });
  axios
    .get("https://business-card-backend.herokuapp.com/api/cards")
    .then(res => {
      console.log(res);
      dispatch({ type: SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ERROR, payload: err });
    });
};
