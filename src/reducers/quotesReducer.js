export const INITIAL_STATE = {
  list: [],
  term: '',
  image: '',
  selectedQuote: {},
  isEdit: false
}

export const quotesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return {...state, list: [ ...state.list, action.payload ], image: '', term: '' };
    case 'EDIT_QUOTE':
      return {...state, list: state.list.map( quote => quote.id === action.payload.id ? action.payload : quote ) };
    case 'REMOVE_QUOTE':
      return { ...state, list: state.list.filter( quote => quote.id !== action.payload ) };
    case 'GET_QUOTE':
      return { ...state, selectedQuote: state.list.find( quote => quote.id === action.payload ) };
    case 'SET_TERM':
      return { ...state, term: action.payload }
    case 'IMAGE_RECEIVED':
      return { ...state, image: action.payload }
    case 'REMOVE_IMAGE':
      return { ...state, image: '' }
    case 'RANDOM_QUOTE_RECEIVED':
      return { ...state, list: [ ...state.list, action.payload ] }
    case 'SET_EDIT_MODE':
      return { ...state, isEdit: true}
    case 'SET_NORMAL_MODE':
      return { ...state, isEdit: false}
    default:
      return state
  }
}
