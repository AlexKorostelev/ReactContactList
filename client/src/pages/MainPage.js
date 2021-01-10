import React from 'react';
import { useSelector } from 'react-redux';
import FormAdd from '../components/FormAdd/FormAdd';
// import Search from '../components/Search/Search';
import ContactList from '../components/ContactList/ContactList';

function MainPage() {
  const isAuth = useSelector((store) => store.auth);
  return (
    <div>
      {isAuth && <FormAdd />}
      <ContactList />
    </div>
  );
}

export default MainPage;
