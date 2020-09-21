import React from 'react'

const CustomButton = ({children, ...otherProps}) => (
  <button className="btn waves-effect waves-light right" {...otherProps}>
    {children}
  </button>
)

export default CustomButton