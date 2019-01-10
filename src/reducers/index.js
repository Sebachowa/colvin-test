import { combineReducers } from "redux";
import { quotesReducer } from './quotesReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  quotes: quotesReducer,
  form: formReducer 
})