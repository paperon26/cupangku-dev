import React from 'react';

import './App.css';
import 'materialize-css/dist/css/materialize.min.css';

import HomePage from './pages/home.page/Home.page';
import { Route, Switch } from 'react-router-dom';
import IkanPage from './pages/ikan.page/Ikan.page';
import LoginPage from './pages/login.page/Login.page';
import RegisterPage from './pages/register.page/Register.page';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/ikan' component={IkanPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
      </Switch>
    </div>
  );
}

export default App;
