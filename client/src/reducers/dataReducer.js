import { GET_DATA, GET_PICTURE } from '../actions/types'; 

const initialState = {
  data: {},
  picture: null
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_DATA:
      return {
        ...state,
        data: action.payload
      };
    case GET_PICTURE:
      return {
        ...state,
        picture: action.payload
      };
    default:
      return state;
  }
}