import React from 'react'

const Button = ({children,type,onClick}) => {
  return (
    <button 
    onClick={onClick}
    type={type}
    className="bg-accent text-light py-2 px-5 rounded-lg cursor-pointer capitalize font-semibold hover:bg-primary">
          {children}
          </button>
  )
}

export default Button
