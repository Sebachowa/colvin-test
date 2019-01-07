const initialState = {
  quoteList: [],
  term: '',
  image: '',
  randomImage: '',
  randomQuote: {
    author: '',
    content: ''
  }
}

export const quotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return {...state, quoteList: [...state.quoteList, action.payload]}
    case 'EDIT_QUOTE':
      return state.quoteList.map(quote => quote.id === action.payload.id ? action.payload : quote);
    case 'REMOVE_QUOTE':
      return state.quoteList.filter(quote => quote.id !== action.paylaod);
    case 'SET_TERM':
      return { ...state, term: action.payload }
    case 'IMAGE_RECEIVED':
      return { ...state, image: action.payload }
    case 'RANDOM_IMAGE_RECEIVED':
      return { ...state, randomImage: action.payload }
    case 'RANDOM_QUOTE_RECEIVED':
      return { ...state, randomQuote: action.payload }
    default:
      return state
  }
}