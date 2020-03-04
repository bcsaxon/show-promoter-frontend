import {
  GET_CONCERTS,
  GET_CONCERT,
  ADD_CONCERT,
  DELETE_CONCERT,
  SET_LOADING,
  LOGS_ERROR
} from '../actions/types';

const initialState = {
  concerts: null,
  current_concert: null,
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

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case LOGS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
