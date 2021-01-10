/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../redux/actionCreators/auth';
import styles from './header.module.css';

export default function Header() {
  const isAuth = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const location = useLocation();

  const handlerLogout = () => dispatch(logOut());

  return (
    <>
      <nav className={styles.main}>
        <div className={styles.navbar}>
          <div className={styles.navComponents}>
            <div>
              <Link to="/" className={(location.pathname === '/') ? styles.active : ''}>Main page</Link>
            </div>
            <div>
              <Link to="/login" className={(location.pathname === '/') ? '' : styles.active}>Login</Link>
            </div>
          </div>

          <div>
            {isAuth && <i className="material-icons icon" style={{ fontSize: '40px', marginTop: '4px', cursor: 'pointer' }} role="button" onClick={handlerLogout}>exit_to_app</i>}
          </div>
        </div>
      </nav>
    </>
  );
}
