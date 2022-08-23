import { combineReducers, createStore } from 'redux';
import addRemoveBook from './books/books';
import Categories from './categories/categories';

const rootReducer = combineReducers({
  addRemoveBook,
  Categories,
});

const store = createStore(rootReducer);

export default store;
