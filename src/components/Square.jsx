import React from 'react'

const Square = ({ value, onSquareClick }) => {
  return (
    <button className="p-5 border bg-white w-14 h-14 flex items-center justify-center font-semibold hover:bg-blue-500" onClick={onSquareClick}>
    {value}
  </button>
  )
}

export default Square