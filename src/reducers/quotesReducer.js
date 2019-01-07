const initialState = {
  quoteList: [],
  image: '',
  randomImage: '',
  randomQuote: ''
}

export const quotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return {...state, quoteList: [...state.quoteList, action.payload]}
    case 'EDIT_QUOTE':
      return state.quoteList.map(quote => quote.id === action.payload.id ? action.payload : quote);
    case 'REMOVE_QUOTE':
      return state.quoteList.filter(quote => quote.id !== action.paylaod);
    case 'FETCH_IMAGE':
      return { ...state, image: action.payload }
    case 'FETCH_RANDOM_IMAGE':
      return { ...state, randomImage: action.payload }
    case 'RANDOM_QUOTE_RECEIVED':
      return { ...state, randomQuote: action.payload }
    default:
      return state
  }
}