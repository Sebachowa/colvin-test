import { combineReducers } from "redux";
import { quotesReducer } from './quotesReducer';
import { randomQuoteReducer } from './randomQuoteReducer';

export default combineReducers({
  quotes: quotesReducer,
  randomQuote: randomQuoteReducer 
})