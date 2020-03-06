import {
  GET_CONCERTS,
  GET_CONCERT,
  ADD_CONCERT,
  DELETE_CONCERT,
  SET_LOADING,
  CONCERTS_ERROR
} from '../actions/types';

const initialState = {
  concerts: null,
  current_concert: {},
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CONCERTS:
      return {
        ...state,
        concerts: action.payload,
        loading: false
      };
    case ADD_CONCERT:
      return {
        ...state,
        concerts: [...state.concerts, action.payload],
        loading: false
      };

    case GET_CONCERT:
      return {
        ...state,
        current_concert: action.payload
      };

    case DELETE_CONCERT:
      return {
        ...state,
        concerts: state.concerts.filter(
          concert => concert.id !== action.payload
        ),
        loading: false
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case CONCERTS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
