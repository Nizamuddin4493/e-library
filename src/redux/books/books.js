/* eslint-disable camelcase */
import { createAsyncThunk } from '@reduxjs/toolkit';

const ADD = 'bookStore/books/ADD';
const REMOVE = 'bookStore/books/REMOVE';
const INITIAL_STATE = [];
const FETCH_SUCCESS = 'bookstore/books/FETCH_SUCCESS';

export function fetchBookSucess(payload) {
  return {
    type: FETCH_SUCCESS,
    payload,
  };
}

export function addBook(payload) {
  return {
    type: ADD,
    payload,
  };
}

export function removeBook(item_id) {
  return {
    type: REMOVE,
    item_id,
  };
}

export const addBookToApi = createAsyncThunk(
  'ADD',
  async (payload, { dispatch }) => {
    await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/mK4DAj0qQVIzY4zAccYh/books',
      {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-type': 'application/JSON' },
      });
    return dispatch(addBook(payload));
  },
);

export const fetchBookThunk = () => async (dispatch) => {
  const responce = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/mK4DAj0qQVIzY4zAccYh/books');
  const bookData = await responce.json();
  const books = Object.entries(bookData).map(([key, value]) => ({
    item_id: key,
    title: value[0].title,
    author: value[0].author,
  }));
  dispatch(fetchBookSucess(books));
};

export const removeBookFromApi = createAsyncThunk(
  'REMOVE',
  async (item_id, { dispatch }) => {
    await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/mK4DAj0qQVIzY4zAccYh/books/${item_id}`, {
      method: 'DELETE',
      body: JSON.stringify({ item_id }),
      headers: { 'Content-type': 'application/JSON' },
    });
    return dispatch(removeBook(item_id));
  },
);

export default function addRemoveBook(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_SUCCESS:
      return [...action.payload];
    case ADD:
      return [...state, action.payload];
    case REMOVE:
      return state.filter((book) => book.item_id !== action.item_id);
    default:
      return state;
  }
}
