import { createStore, combineReducers } from "redux";
import { quotesReducer } from './reducers';

const store = createStore(
  combineReducers({
    quotes: quotesReducer
  })
);

export default store;