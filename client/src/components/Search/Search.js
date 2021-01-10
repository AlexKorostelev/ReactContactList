/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import setFilterText from '../../redux/actionCreators/filter';
import styles from './search.module.css';

function Search() {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');

  const findHandler = (e) => {
    setFilter(e.target.value);
    dispatch(setFilterText(e.target.value.toLowerCase()));
  };

  return (
    <div className={`input-field ${styles.container}`}>
      <i className={`material-icons prefix ${styles.selected}`}>search </i>
      <input id="icon_search" type="text" value={filter} onChange={findHandler} />
      <label htmlFor="icon_search">Find by name or phone</label>
    </div>
  );
}
export default Search;
