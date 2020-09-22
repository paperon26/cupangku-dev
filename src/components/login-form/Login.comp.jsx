import React from 'react'
import M from 'materialize-css'
import { signInWithGoogle } from '../../firebase/firebase.utils'

import './Login.style.css'
import Forminput from '../form-input/FormInput.comp'
import CustomButton from '../custom-button/CustomButton.comp'

class LoginComp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  componentDidMount() {
    M.AutoInit()
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.setState({ email: '', password: '' })
  }

  handleChange = (e) => {
    const { value, name } = e.target

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="row login-row">
        <h5 className="col s12 center">Sudah punya akun</h5>
        <span className="col s12 center">Masuk dengan email dan password</span>
        <form className="col s12 card-panel" onSubmit={this.handleSubmit}>
          <Forminput
            id="email"
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            className="validate"
            label="Email"
            labelFor="email"
            required
          />
          <Forminput
            id="password"
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            className="validate"
            label="Password"
            labelFor="password"
            required
          />
          <div className="row">
            <div className="col s12 center">
              <CustomButton type="submit" id="validate">Submit</CustomButton>
            </div>
            <div className="col s12 center">
              <span className="grey-text center">- atau -</span>
            </div>
            <div className="col s12 center">
              <CustomButton className="btn blue" onClick={signInWithGoogle} id="validate">Masuk dengan Google</CustomButton>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default LoginComp