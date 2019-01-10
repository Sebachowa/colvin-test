import { combineReducers } from "redux";
import { quotesReducer } from './quotesReducer';
import { randomQuoteReducer } from './randomQuoteReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  quotes: quotesReducer,
  randomQuote: randomQuoteReducer,
  form: formReducer 
})