import { combineReducers } from 'redux';
import concertReducer from './concertReducer';

export default combineReducers({
  concert: concertReducer
});
