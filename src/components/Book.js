import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, auther }) => (
  <>
    <div className="singlBook">
      <div>
        <p>Title</p>
        <h2>{title}</h2>
      </div>
      <div>
        <p>Auther</p>
        <h2>{auther}</h2>
      </div>
      <div className="rBtn">
        <button type="button">Remove</button>
      </div>
    </div>
  </>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  auther: PropTypes.string.isRequired,
};

export default Book;
