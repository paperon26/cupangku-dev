import React from 'react'

import './MenuItem.style.css'

const MenuItem = ({ title, subtitle, color }) => (
  <div className="col s12 m6 l4 center">
    <div className={`card ${color} `} >
      <div className="card-content white-text">
        <h5 className="title" > {title}</h5>
        <p className="subtitle">{subtitle}</p>
      </div>
    </div>

  </div>
)

export default MenuItem



