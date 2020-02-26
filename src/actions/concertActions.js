import {
  GET_CONCERTS,
  ADD_CONCERT,
  DELETE_CONCERT,
  SET_LOADING,
  LOGS_ERROR
} from './types';

// GETTING CONCERTS

// export const getConcerts = () => {
//   return async dispatch => {
//     setLoading();

//     const res = await fetch('http://localhost:3000/concerts');
//     const data = await res.json();

//     dispatch({
//       type: GET_CONCERTS,
//       payload: data
//     })
//   };
// };

export const getConcerts = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/concerts');
    const data = await res.json();

    dispatch({
      type: GET_CONCERTS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      paylod: err.response.data
    });
  }
};

//SETS LOADING TO TRUE

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
