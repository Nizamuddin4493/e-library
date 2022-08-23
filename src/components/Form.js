import React, { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { addBook } from '../redux/books/books';

const Form = () => {
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const despatch = useDispatch();
  const newBookTitle = (e) => {
    setBookTitle(e.target.value);
  };

  const newBookAuthor = (e) => {
    setBookAuthor(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newBook = {
      id: new Date().getTime(),
      title: bookTitle,
      auther: bookAuthor,
    };
    despatch(addBook(newBook));
    setBookTitle('');
    setBookAuthor('');
  };

  return (
    <>
      <div className="formfield">
        <h1>Add New Book</h1>
        <form onSubmit={submitHandler}>
          <input type="text" name="title" placeholder="Book Name" value={bookTitle} onChange={newBookTitle} required />
          <input type="text" name="auther" placeholder="Auther Name" value={bookAuthor} onChange={newBookAuthor} required />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default Form;
