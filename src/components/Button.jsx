import React from 'react'

const Button = ({bgColor, color, size, text, borderRadius, }) => {
  return (
    <button
      type='button'
      style={{ backgroundColor:bgColor, color, borderRadius }}
      className={`text-${size}, font-semibold p-2 py-2 hover:drop-shadow-xl `}
    >
      {text}
    </button>
  )
}

export default Button