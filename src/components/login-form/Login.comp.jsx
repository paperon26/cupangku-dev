import React from 'react'
import M from 'materialize-css'

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
          <CustomButton type="submit" id="validate">Submit</CustomButton>
        </form>
      </div>
    )
  }
}

export default LoginComp