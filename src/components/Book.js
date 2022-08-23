import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({ id, title, auther }) => {
  const dispatch = useDispatch();

  return (
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
          <button type="button" onClick={() => { dispatch(removeBook(id)); }}>Remove</button>
        </div>
      </div>
    </>
  );
};
Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  auther: PropTypes.string.isRequired,
};

export default Book;
