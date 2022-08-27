import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import addRemoveBook, { fetchBook } from './books/books';
import Categories from './categories/categories';

const rootReducer = combineReducers({
  addRemoveBook,
  Categories,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(fetchBook());

export default store;
