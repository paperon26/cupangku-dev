import React from 'react'

const Forminput = ({ handleChange, label, labelFor, ...otherProps }) => (
  <div className="row">
    <div className="input-field col s12">
      <input onChange={handleChange} {...otherProps} />
      <label for={labelFor}>{label}</label>
    </div>
  </div>
)

export default Forminput