/* eslint-disable no-console */
// import { useHistory } from 'react-router-dom';
import {
  USER_AUTHENTICATED,
  USER_NOT_AUTHENTICATED,
  REMOVE_ALL_CONTACTS,
} from '../types/types';

export const logOut = () => async (dispatch) => {
  const response = await fetch('http://localhost:3333/logout', {
    credentials: 'include',
    redirect: 'follow',
  });
  if (response.status === 200) {
    dispatch({ type: USER_NOT_AUTHENTICATED });
    dispatch({ type: REMOVE_ALL_CONTACTS });
    localStorage.clear();
  }
};

export const logIn = (data) => async (dispatch) => {
  const response = await fetch('http://localhost:3333/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    }),
    credentials: 'include',
    redirect: 'follow',
  });
  if (response.status === 200) {
    dispatch({ type: USER_AUTHENTICATED });
    localStorage.setItem('auth', 'true');
  }
  return (response.status === 200);
};
