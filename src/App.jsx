import React from 'react';

import './App.css';
import 'materialize-css/dist/css/materialize.min.css';

import HomePage from './pages/home.page/Home.page';
import { Route, Switch } from 'react-router-dom';
import IkanPage from './pages/ikan.page/Ikan.page';
import LoginPage from './pages/login.page/Login.page';
import RegisterPage from './pages/register.page/Register.page';
import Header from './components/header/Header.comp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      } else {
        this.setState({ currentUser: userAuth })
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/ikan' component={IkanPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegisterPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
