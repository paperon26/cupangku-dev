import React from 'react'
import M from 'materialize-css'

import './Login.style.css'
import Forminput from '../form-input/FormInput.comp'

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
          

          {/* <div className="row">
            <div className="input-field col s12">
              <input
                id="email"
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                className="validate"
                required />
              <label for="email">Email</label>
              <span className="helper-text" data-error="format email salah" data-success="format email benar" ></span>
            </div>
          </div > */}

          {/* <div className="row">
            <div className="input-field col s12">
              <input
                id="password"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                className="validate"
                required />
              <label for="password">Password</label>
            </div>
          </div> */}

          <input type="submit" value="Submit" id="validate" className="btn waves-effect waves-light right" />
        </form>
      </div>
    )
  }
}

export default LoginComp