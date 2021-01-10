import {
  ADD_CONTACT, EDIT_CONTACT, DELETE_CONTACT, GET_ALL_CONTACTS,
} from '../types/types';

export const addContact = (name, phone) => async (dispatch) => {
  const response = await fetch('http://localhost:3333/contacts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, phone }),
    credentials: 'include',
    redirect: 'follow',
  });

  if (response.status === 200) {
    const { id } = await response.json();
    dispatch({
      type: ADD_CONTACT,
      payload: { id, name, phone },
    });
  }
};

export const deleteContact = (id) => async (dispatch) => {
  const response = await fetch('http://localhost:3333/contacts', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
    credentials: 'include',
    redirect: 'follow',
  });
  if (response.status === 200) {
    dispatch({
      type: DELETE_CONTACT,
      payload: id,
    });
  }
};

export const editContact = (name, phone, id) => async (dispatch) => {
  const response = await fetch('http://localhost:3333/contacts', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, phone, id }),
    credentials: 'include',
    redirect: 'follow',
  });

  if (response.status === 200) {
    dispatch({
      type: EDIT_CONTACT,
      payload: { name, phone, id },
    });
    return true;
  }
  return false;
};

export const getAllContacts = () => async (dispatch) => {
  const response = await fetch('http://localhost:3333/contacts', {
    credentials: 'include',
    redirect: 'follow',
  });
  if (response.status === 200) {
    const data = await response.json();
    dispatch({
      type: GET_ALL_CONTACTS,
      payload: data,
    });
  }
};
