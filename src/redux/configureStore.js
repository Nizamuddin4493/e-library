import { combineReducers, configureStore } from 'redux';
import * as Books from './books/books';
import * as Categories from './categories/categories';

const rootReducer = combineReducers(Books, Categories);

const Store = configureStore(rootReducer);

export default Store;
