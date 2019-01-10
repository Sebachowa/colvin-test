export const initialState = {
  list: [],
  term: '',
  image: '',
  selectedQuote: {

  }
}

export const quotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return {...state, list: [...state.list, action.payload], image: '', term: ''}
    case 'EDIT_QUOTE':
      return state.list.map(quote => quote.id === action.payload.id ? action.payload : quote);
    case 'REMOVE_QUOTE':
      return state.list.filter(quote => quote.id !== action.payload);
    case 'GET_QUOTE':
      const selectedQuote = state.list.find(quote => quote.id === action.payload)
      return {...state, selectedQuote};
    case 'SET_TERM':
      return { ...state, term: action.payload }
    case 'IMAGE_RECEIVED':
      return { ...state, image: action.payload }
    case 'REMOVE_IMAGE':
      return { ...state, image: '' }
    case 'RANDOM_QUOTE_RECEIVED':
      return { ...state, list: [...state.list, action.payload] }
    default:
      return state
  }
}
