import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux/es/exports';
import { addBookToApi } from '../redux/books/books';

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
      item_id: uuidv4(),
      title: bookTitle,
      author: bookAuthor,
      category: 'Fiction',
    };

    despatch(addBookToApi(newBook));
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
