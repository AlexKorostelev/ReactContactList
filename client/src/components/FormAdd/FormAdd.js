/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/actionCreators/contacts';
import Search from '../Search/Search';
import styles from './formAdd.module.css';

export default function FormAdd() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const addContactHandler = (e) => {
    e.preventDefault();
    dispatch(addContact(name, phone));
    setName('');
    setPhone('');
  };

  return (
    <div className={styles.container}>
      <Search />
      <form onSubmit={addContactHandler} className={styles.form}>
        <div className="input-field divadd">
          <i className={`material-icons prefix ${styles.selected}`}>account_circle </i>
          <input id="icon_prefix" type="text" required value={name} onChange={(e) => setName(e.target.value)} />
          <label htmlFor="icon_prefix">Full Name</label>
        </div>
        <div className="input-field divadd">
          <i className={`material-icons prefix ${styles.selected}`}>phone</i>
          <input id="icon_telephone" type="text" required value={phone} onChange={(e) => setPhone(e.target.value)} />
          <label htmlFor="icon_telephone">Telephone</label>
        </div>
        <div className="divadd">
          <button type="submit" className="btn waves-effect waves-light grey darken-3">Add contact</button>
        </div>
      </form>
    </div>
  );
}
