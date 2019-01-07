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

export const setTerm = term => {
  return {
    type: 'SET_TERM',
    payload: term
  }
}

export const getImage = term => {
  return {
    type: 'GET_IMAGE',
    payload: term
  }
}

export const ImageReceived = data => {
  return {
    type: 'IMAGE_RECEIVED',
    payload: data
  }
}

export const getRandomImage = () => {
  return {
    type: 'GET_RANDOM_IMAGE'
  }
}

export const randomImageReceived = data => {
  return {
    type: 'RANDOM_IMAGE_RECEIVED',
    payload: data
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