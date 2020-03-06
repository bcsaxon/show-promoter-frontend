import {
  GET_CONCERTS,
  ADD_CONCERT,
  DELETE_CONCERT,
  GET_CONCERT,
  SET_LOADING,
  CONCERTS_ERROR
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
  } catch (error) {
    dispatch({
      type: CONCERTS_ERROR,
      payload: error.response.statusText
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
  } catch (error) {
    dispatch({
      type: CONCERTS_ERROR,
      payload: error.response.statusText
    });
  }
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
  } catch (error) {
    dispatch({
      type: CONCERTS_ERROR,
      payload: error.response.statusText
    });
  }
};

//DELETE CONCERT

export const deleteConcert = id => async dispatch => {
  try {
    setLoading();

    await fetch(`http://localhost:3000/concerts/${id}`, {
      method: 'DELETE'
    });

    dispatch({
      type: DELETE_CONCERT,
      payload: id
    });
    // dispatch(getConcerts());
  } catch (error) {
    dispatch({
      type: CONCERTS_ERROR,
      payload: error.response.statusText
    });
  }
};

//SETS LOADING TO TRUE

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
