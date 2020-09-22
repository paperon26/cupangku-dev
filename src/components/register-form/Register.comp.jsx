import React from 'react'
import M from 'materialize-css'
import Forminput from '../form-input/FormInput.comp'
import CustomButton from '../custom-button/CustomButton.comp'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'


class RegisterComp extends React.Component {
  constructor() {
    super()

    this.state = {
      displayName:'',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  componentDidMount() {
    M.AutoInit()
  }

  handleSubmit = async e => {
    e.preventDefault()
    const {displayName, email, password, confirmPassword} = this.state
    
    if(password !== confirmPassword) {
      alert("Passwword tidak cocok")
      return
    }

    try {
      const { user} = await auth.createUserWithEmailAndPassword(email, password)
     
      await createUserProfileDocument(user, {displayName})

      this.setState = {
        displayName:"",
        email: "",
        password: "",
        confirmPassword: ""
      }

    } catch (error) {
      console.log(error)
    }
  }

  handleChange = (e) => {
    const { value, name } = e.target

    this.setState({ [name]: value })
  }

  render(){
    const {displayName, email, password, confirmPassword} = this.state
    return (
      <div className="row login-row">
        <h5 className="col s12 center">Belum punya akun</h5>
        <span className="col s12 center">Buat dengan email dan password</span>
        <form className="col s12 card-panel" onSubmit={this.handleSubmit}>
        <Forminput
            id="displayName"
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            className="validate"
            label="Display Name"
            labelFor="displayName"
            required
          />
          <Forminput
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            className="validate"
            label="Email"
            labelFor="email"
            required
          />
          <Forminput
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            className="validate"
            label="Password"
            labelFor="password"
            required
          />
          <Forminput
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            className="validate"
            label="Confirm Password"
            labelFor="confirmPassword"
            required
          />
          <div className="row">
            <div className="col s12 center">
              <CustomButton type="submit" id="validate">Submit</CustomButton>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default RegisterComp