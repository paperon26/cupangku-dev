import React from 'react'
import M from 'materialize-css'
import { Link } from 'react-router-dom';

import './Header.style.css'

class Header extends React.Component {

  componentDidMount() {
    let sidenav = document.querySelector("#slide-out");
    M.Sidenav.init(sidenav, {});
  }

  render() {
    return (
      <div className="container">
        <nav className="teal">
          <div data-target="slide-out" className="btn-flat sidenav-trigger">
            <i className="material-icons">menu</i>
          </div>
          <Link to='/' className="brand-logo">Cupangku</Link>

          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/register'>Register</Link></li>
            <li><Link to='/'>About</Link></li>
          </ul>
        </nav>

        <ul id="slide-out" className="sidenav">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/register'>Register</Link></li>
          <li><Link to='/'>About</Link></li>
        </ul>
      </div>


    )
  }
}

export default Header