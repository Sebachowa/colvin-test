export const quotesReducer = (state = [], action) => {
  if (action.type === 'ADD_QUOTE') {
    return [...state, action.payload];
  }

  if (action.type === 'EDIT_QUOTE') {
    return state.map(quote => quote.id === action.payload.id ? action.payload : quote);
  }

  if (action.type === 'REMOVE_Quote') {
    return state.filter(quote => quote.id !== action.paylaod);
  }
  return state
}