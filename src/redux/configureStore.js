import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import addRemoveBook, { fetchBookThunk } from './books/books';
import Categories from './categories/categories';

const rootReducer = combineReducers({
  addRemoveBook,
  Categories,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(fetchBookThunk());

export default store;
