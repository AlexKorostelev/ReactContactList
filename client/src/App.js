import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './components/Header/Header';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Router>
      <Header />
      <Switch>

        <Route path="/" exact>
          <MainPage />
        </Route>

        <Route path="/login" exact>
          <LoginPage />
        </Route>

      </Switch>

    </Router>
  );
}

export default App;
