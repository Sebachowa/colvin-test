export const initialState = {
  list: [],
  term: '',
  image: '',
}

export const quotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return {...state, list: [...state.list, action.payload]}
    case 'EDIT_QUOTE':
      return state.list.map(quote => quote.id === action.payload.id ? action.payload : quote);
    case 'REMOVE_QUOTE':
      return state.list.filter(quote => quote.id !== action.paylaod);
    case 'SET_TERM':
      return { ...state, term: action.payload }
    case 'IMAGE_RECEIVED':
      return { ...state, image: action.payload }
    case 'RANDOM_QUOTE_RECEIVED':
      return { ...state, list: [...state.list, action.payload] }
    default:
      return state
  }
}
