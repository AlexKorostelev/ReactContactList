import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

function initState() {
  const auth = JSON.parse(localStorage.getItem('auth')) || false;
  const contacts = [];
  const filter = '';
  return { auth, contacts, filter };
}

const store = createStore(
  rootReducer,
  initState(),
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
