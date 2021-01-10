/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact, editContact } from '../../redux/actionCreators/contacts';
import styles from './contact.module.css';

function Contact({ name, phone, id }) {
  const dispatch = useDispatch();
  const ref = useRef();
  const [inputName, setInputName] = useState(name);
  const [inputPhone, setInputPhone] = useState(phone);
  const [edit, setEdit] = useState(false);

  const saveContactHandler = async (e) => {
    e.preventDefault();
    const contactSavedOK = await dispatch(editContact(inputName, inputPhone, id));
    if (contactSavedOK) {
      setEdit(false);
    }
  };

  const editHandler = () => {
    setEdit(true);
    ref.current.focus();
  };

  const deleteHandler = (contactID) => {
    dispatch(deleteContact(contactID));
  };

  return (
    <div className={`card ${styles.cardContainer}`}>
      <div className="card-content">
        <form onSubmit={saveContactHandler} className={styles.formContainer}>
          <div>
            <input onChange={(e) => setInputName(e.target.value)} type="text" ref={ref} readOnly={!edit} value={inputName} />
            <input onChange={(e) => setInputPhone(e.target.value)} type="text" readOnly={!edit} value={inputPhone} />
          </div>
          <div className={styles.cardButtonContainer}>
            {!edit && (
              <button
                className={`btn waves-effect waves-light grey darken-3 ${styles.button}`}
                type="button"
                onClick={editHandler}
              >
                <i className="material-icons left">edit</i>
              </button>
            )}

            {edit && (
              <button
                className={`btn waves-effect waves-light grey darken-3 ${styles.button}`}
                type="submit"
              >
                <i className="material-icons left">save</i>
              </button>
            )}

            <button
              className={`btn waves-effect waves-light deep-orange darken-4 ${styles.button}`}
              type="button"
              onClick={() => deleteHandler(id)}
            >
              <i className="material-icons left">delete</i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Contact;
