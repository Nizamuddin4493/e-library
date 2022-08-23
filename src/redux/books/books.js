const ADD = 'bookStore/books/ADD';
const REMOVE = 'bookStore/books/REMOVE';
const INITIAL_STATE = [
  { id: 1, title: 'Js', auther: 'Nizam khan' },
  { id: 2, title: 'react', auther: 'ahmad Khan' },
  { id: 3, title: 'redux', auther: 'Mahmood Jan' },
];

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

export default function addRemoveBook(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case REMOVE:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
}
