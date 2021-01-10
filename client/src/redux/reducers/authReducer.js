import { USER_AUTHENTICATED, USER_NOT_AUTHENTICATED } from '../types/types';

function authReducer(state = false, action) {
  switch (action.type) {
    case USER_AUTHENTICATED:
      return true;
    case USER_NOT_AUTHENTICATED:
      return false;
    default:
      return state;
  }
}

export default authReducer;
