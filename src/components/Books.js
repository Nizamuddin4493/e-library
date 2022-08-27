import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchBookThunk } from '../redux/books/books';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const showBook = useSelector((state) => state.addRemoveBook);
  useEffect(() => {
    fetchBookThunk();
  }, [showBook]);

  return (
    <>
      <div className="books-list">
        {showBook.map((showBook) => (
          <Book
            key={showBook.item_id}
            item_id={showBook.item_id}
            title={showBook.title}
            author={showBook.author}
          />
        ))}
      </div>
      <hr />
      <Form />
    </>
  );
};

export default Books;
