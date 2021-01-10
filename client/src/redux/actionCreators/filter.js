/* eslint-disable no-console */
// import { useHistory } from 'react-router-dom';
import { SET_FILTER_TEXT } from '../types/types';

const setFilterText = (text) => ({
  type: SET_FILTER_TEXT,
  payload: text,
});

export default setFilterText;
