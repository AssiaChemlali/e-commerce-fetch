import React from 'react'

const Button = ({children,type}) => {
  return (
    <button 
    type={type}
    className="bg-accent text-light py-1 px-5 rounded-lg cursor-pointer capitalize font-semibold hover:bg-primary">
          {children}
          </button>
  )
}

export default Button
