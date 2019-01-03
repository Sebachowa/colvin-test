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