/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logIn } from '../../redux/actionCreators/auth';
import styles from './login.module.css';

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [inputData, setInputData] = useState({});
  const [authError, setAuthError] = useState(false);

  const handlerLogin = async (e) => {
    e.preventDefault();
    const authStatus = await dispatch(logIn(inputData));
    if (authStatus) {
      history.push('/');
    } else {
      setAuthError(true);
    }
  };

  const inputChangeHandler = (e) => {
    setInputData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handlerLogin} className={`card ${styles.form}`}>
        <div className="input-field divadd">
          <i className={`material-icons prefix ${styles.selected}`}>email</i>
          <input id="icon_email" type="email" name="email" required value={inputData.email} onChange={inputChangeHandler} />
          <label htmlFor="icon_email">Email</label>
        </div>

        <div className="input-field divadd">
          <i className={`material-icons prefix ${styles.selected}`}>vpn_key</i>
          <input id="icon_key" type="password" name="password" required value={inputData.password} onChange={inputChangeHandler} />
          <label htmlFor="icon_key">Password</label>
        </div>

        <button className="btn waves-effect waves-light grey darken-3" type="submit" name="action">
          LOGIN
          <i className="material-icons right">send</i>
        </button>
        {authError && <p>Неверные логин/пароль! Подсказка: a@a.a/123</p>}
      </form>
    </div>
  );
}
export default Login;
