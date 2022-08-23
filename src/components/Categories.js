import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { categories } from '../redux/categories/categories';

const Categories = () => {
  const showCategories = useSelector((state) => state.Categories);
  const despatch = useDispatch();

  const categoriesAction = () => {
    despatch(categories());
    alert(showCategories);
  };

  return (
    <button type="button" className="cat-btn" onClick={() => categoriesAction()}>Categories</button>
  );
};

export default Categories;
