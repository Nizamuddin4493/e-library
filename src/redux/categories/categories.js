const STATUS = 'bookStor/categories/STATUS';
const INITIAL_STATE = [];

export function categories() {
  return {
    type: STATUS,
  };
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case STATUS:
      return 'Under Constructino';
    default:
      return state;
  }
}
