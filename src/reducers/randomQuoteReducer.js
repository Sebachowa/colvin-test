export const initialState = {
  randomImage: '',
  randomQuote: {
    author: '',
    content: ''
  }
}

export const randomQuoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RANDOM_IMAGE_RECEIVED':
      return { ...state, randomImage: action.payload }
    case 'RANDOM_QUOTE_RECEIVED':
      return { ...state, randomQuote: action.payload }
    default:
      return state
  }
}