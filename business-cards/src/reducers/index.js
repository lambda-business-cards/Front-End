//reducers
import { 
  LOGIN_START, 
  LOGIN_SUCCESS, 
  LOGIN_FAILURE, 
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  CREATE_CARD_START,
  CREATE_CARD_SUCCESS,
  CREATE_CARD_FAILURE
} from '../actions';


const initialState ={
  cards: [
    {
      title: 'Business Name',
      name: 'Pat Palmerston',
      number: 707-787-9899,
      email: 'pat@yahoo.com'
    }
  ],
  fetchingData: false,
  loggingIn: false,
  creatingCard: false,
  error: null
}


export const reducer = (state = initialState, action) => {
  // console.log('reducer', action)
  switch (action.type) {
    case LOGIN_START:
    case FETCH_DATA_START:
      return {
        ...state,
        fetchingData: true
      };

    case LOGIN_SUCCESS:
      // console.log(action.payload);
      localStorage.setItem('token', action.payload.payload);
      return {
        ...state,
        fetchingData: false
      }

    case FETCH_DATA_SUCCESS:
    // console.log(action.payload.results)
      return {
        ...state,
        fetchingData: false,
        cards: [...action.payload]
      }

    case LOGIN_FAILURE:
    case FETCH_DATA_FAILURE:
    // console.log(action.payload.results)
      return {
        ...state,
        error: action.payload
      }

    case CREATE_CARD_START: 
      return {
        ...state,
        creatingCard: true
      }
      
    case CREATE_CARD_SUCCESS:
      return {
        ...state,
        cards: action.payload,
        creatingCard: false
      }

      case CREATE_CARD_FAILURE:
        return {
          ...state,
          error: action.payload
        }
      
    default:
      return state;
  }
}

export default reducer;