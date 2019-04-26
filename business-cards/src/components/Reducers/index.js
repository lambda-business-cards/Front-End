import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SUCCESS
} from '../Actions/index';

const initialState = {
  business_name: "",
  contact_name: "",
  email: "",
  phone: "",
  address: "",
  fax: "",
  web_url: "",
  error: '',
  loggingIn: false,
  cards: [
  ]
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        error: '',
        errorStatusCode: null,
        fetchingData: false,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: '',
        loggingIn: false
      };
    case SUCCESS:
      return {
        ...state,
        error: '',
        loggingIn: true,
        cards: action.payload.created
      }
    default:
      return state;
  }
};

export default reducer;
