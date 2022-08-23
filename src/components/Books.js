import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const showBook = useSelector((state) => state.addRemoveBook);

  return (
    <>
      <div className="books-list">
        {showBook.map((showBook) => (
          <Book
            key={showBook.id}
            id={showBook.id}
            title={showBook.title}
            auther={showBook.auther}
          />
        ))}
      </div>
      <hr />
      <Form />
    </>
  );
};

export default Books;
