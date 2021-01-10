import { combineReducers } from 'redux';
import contactsReducer from './contactsReducer';
import authReducer from './authReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  auth: authReducer,
  filter: filterReducer,
});

export default rootReducer;
