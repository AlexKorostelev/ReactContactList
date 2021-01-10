import React from 'react';
import { useSelector } from 'react-redux';
import Login from '../components/Login/Login';

function LoginPage() {
  const isAuth = useSelector((store) => store.auth);
  return (
    <>
      {isAuth ? (
        <div style={{ textAlign: 'center' }}>
          <h4>You are already logged in!</h4>
        </div>
      ) : <Login />}
    </>
  );
}

export default LoginPage;
