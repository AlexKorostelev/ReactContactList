import {
  ADD_CONTACT, EDIT_CONTACT, DELETE_CONTACT, GET_ALL_CONTACTS, REMOVE_ALL_CONTACTS,
} from '../types/types';

function contactsReducer(state = [], action) {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];

    case DELETE_CONTACT:
      return state.filter((e) => e.id !== action.payload);

    case EDIT_CONTACT:
      return state.map((e) => {
        if (e.id === action.payload.id) {
          e.name = action.payload.name;
          e.phone = action.payload.phone;
        }
        return e;
      });

    case GET_ALL_CONTACTS:
      return [...action.payload];

    case REMOVE_ALL_CONTACTS:
      return [];

    default:
      return state;
  }
}

export default contactsReducer;
