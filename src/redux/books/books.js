const ADD = 'bookStore/books/ADD';
const REMOVE = 'bookStore/books/REMOVE';
const INITIAL_STATE = [];

export function addBook(book) {
  return {
    type: ADD,
    payload: book,
  };
}

export function removeBook(id) {
  return {
    type: REMOVE,
    payload: id,
  };
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case REMOVE:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
}
