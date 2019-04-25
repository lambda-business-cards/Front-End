//reducers
import { 
  LOGIN_START, 
  LOGIN_SUCCESS, 
  LOGIN_FAILURE, 
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  CREATE_CARD_START,
  CREATE_CARD_SUCCESS,
  CREATE_CARD_FAILURE,
} from '../actions';


const initialState ={
  cards: [],
  fetchingData: false,
  loggingIn: false,
  creatingCard: false,
  creatingUser: false,
  savedCard: false,
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
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        fetchingData: false
      }

    case FETCH_DATA_SUCCESS:
    // console.log(action.payload.results)
    
      return {
        ...state,
        fetchingData: false,
        cards: action.payload.saved
      }

    case LOGIN_FAILURE:
    case FETCH_DATA_FAILURE:
    // console.log(action.payload.results)
      return {
        ...state,
        error: action.payload
      }
      //Card
    case CREATE_CARD_START:  
      return {
        ...state,
        creatingCard: true
      }
    case CREATE_CARD_SUCCESS:   
      return {
        ...state,
        cards: action.payload.created, // or saved
        creatingCard: false
      }
    case CREATE_CARD_FAILURE: 
      return {
        ...state,
        error: action.payload
      }
      // User
    case CREATE_USER_START:  
      return {
        ...state,
        creatingUser: true
      }
    case CREATE_USER_SUCCESS:   
      return {
        ...state,
        creatingUser: false
      }
      case CREATE_USER_FAILURE: 
        return {
          ...state,
          error: action.payload
        }
      
    default:
      return state;

  }
}

export default reducer;


// {
//   id: 5,
//   business_name: 'Philz Fire',
//   contact_name: 'Mason Lander',
//   email: 'masonOG@dingbat.net',
//   phone: 12457896325,
//   img_url: null,
//   address: '67 lambert st',
//   fax: 14785236987,
//   web_url: 'philzfire.com',
//   user_id: 999
// },
// {
//   id: 6,
//   business_name: 'Phenom Fares',
//   contact_name: 'Terry Potcher',
//   email: 'nethigh@life.sas',
//   phone: 12457891234,
//   img_url: null,
//   address: '45 crane st',
//   fax: 14778965987,
//   web_url: 'Fares.com',
//   user_id: 998
// }