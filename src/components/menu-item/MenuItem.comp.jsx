import React from 'react'
import { withRouter } from 'react-router-dom'

import './MenuItem.style.css'

const MenuItem = ({ title, subtitle, color, history, linkUrl, match }) => (
  <div className="col s12 m6 l4 center"
    onClick={() => history.push(`${match.url}${linkUrl}`)} >
    <div className={`card ${color} `} >
      <div className="card-content white-text">
        <h5 className="title"> {title.toUpperCase()}</h5>
        <p className="subtitle">{subtitle}</p>
      </div>
    </div>
  </div>
)

export default withRouter(MenuItem)



