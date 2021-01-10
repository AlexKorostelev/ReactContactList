import { SET_FILTER_TEXT } from '../types/types';

function filterReducer(state = '', action) {
  switch (action.type) {
    case SET_FILTER_TEXT:
      return action.payload;
    default:
      return state;
  }
}

export default filterReducer;
