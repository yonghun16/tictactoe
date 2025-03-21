import React from 'react'
import './Squre.css'

const Squre = ({onClick, value}) => {
  return (
    <button className="squre"
      onClick={onClick}>
      {value}
    </button>
  )
}

export default Squre
