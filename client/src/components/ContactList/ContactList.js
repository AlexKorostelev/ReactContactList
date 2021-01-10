/* eslint-disable react/react-in-jsx-scope */
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getAllContacts } from '../../redux/actionCreators/contacts';
import Contact from '../Contact/Contact';
import styles from './contactList.module.css';

function ContactList() {
  const contacts = useSelector((store) => store.contacts);
  const isAuth = useSelector((store) => store.auth);
  const filterStr = useSelector((store) => store.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuth) {
      dispatch(getAllContacts());
    }
  }, []);

  return (
    <div className={styles.container}>
      {
        contacts.length ? (
          contacts.filter((e) => e.name.toLowerCase().includes(filterStr)
            || e.phone.includes(filterStr))
            .sort((a, b) => ((a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1))
            .map((e) => <Contact key={e.id} name={e.name} phone={e.phone} id={e.id} />)
        )
          : (
            <h4>
              Please
              <Link to="/login"> login </Link>
              to view your contact list!
            </h4>
          )
      }
    </div>
  );
}
export default ContactList;
