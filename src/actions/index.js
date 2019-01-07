import uuidv1 from 'uuid/v1';

export const addQuote = quote => {
  return {
    type: 'ADD_QUOTE',
    payload: { ...quote, id: uuidv1() }
  };
};

export const editQuote = quote => {
  return {
    type: 'EDIT_QUOTE',
    payload: quote
  }
}

export const removeQuote = id => {
  return {
    type: 'REMOVE_QUOTE',
    payload: id
  }
}

export const fetchImage = term => {
  return {
    type: 'FETCH_IMAGE',
    payload: term
  }
}

export const fetchRandomImage = () => {
  return {
    type: 'FETCH_RANDOM_IMAGE',
    payload: null
  }
}

export const getRandomQuote = () => {
  return {
    type: 'GET_RANDOM_QUOTE'
  }
}

export const randomQuoteReceived = data => {
  return {
    type: 'RANDOM_QUOTE_RECEIVED',
    payload: data
  }
}