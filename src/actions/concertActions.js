import {
  GET_CONCERTS,
  ADD_CONCERT,
  DELETE_CONCERT,
  GET_CONCERT,
  SET_LOADING,
  LOGS_ERROR
} from './types';

//GETS ALL CONCERTS
export const getConcerts = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('http://localhost:3000/concerts');
    const data = await res.json();

    dispatch({
      type: GET_CONCERTS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

// ADD NEW CONCERT

export const addConcert = concert => async dispatch => {
  try {
    setLoading();

    const res = await fetch('http://localhost:3000/concerts', {
      method: 'POST',
      body: JSON.stringify(concert),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_CONCERT,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

// export const getConcert = concert => {
//   return {
//     type: SHOW_CONCERT,
//     payload: concert
//   }
// }

// Clear Concert?

//SETS LOADING TO TRUE

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

// Show Concert

export const getConcert = concert => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`http://localhost:3000/concerts/${concert.id}`);
    const data = await res.json();

    dispatch({
      type: GET_CONCERT,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};
