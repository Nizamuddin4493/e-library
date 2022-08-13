import React from 'react';
import Book from './Book';
import Form from './Form';

const Books = () => (
  <>
    <div className="books-list">
      <Book title="Es6 JavaScript" auther="Ahmad khan" />
      <Book title="Modrem React" auther="khan Zaman" />
      <Book title="React and Redux" auther="Nizam Khan" />
    </div>
    <hr />
    <Form />
  </>
);

export default Books;
