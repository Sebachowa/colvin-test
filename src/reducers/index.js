export const quotesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.payload];
    case 'EDIT_QUOTE':
      return state.map(quote => quote.id === action.payload.id ? action.payload : quote);
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.paylaod);
    case 'FETCH_IMAGE':
      return state
    case 'FETCH_RANDOM_IMAGE':
      return state
    case 'FETCH_RANDOM_QUOTE':
      return state
    default:
      return state
  }
}