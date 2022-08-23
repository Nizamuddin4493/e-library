const STATUS = 'bookStore/categories/STATUS';
const INITIAL_STATE = ['Under Construction'];

export function categories() {
  return {
    type: STATUS,
  };
}

export default function Categories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case STATUS:
      return 'Under Construction';
    default:
      return state;
  }
}
