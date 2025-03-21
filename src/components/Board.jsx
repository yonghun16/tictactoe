import React, { useState } from 'react'
import Squre from './Squre'
import './Board.css'

const Board = ({squares, onClick}) => {

  const renderSquare = (i) => {
    return <Squre
      onClick={() => onClick(i)}
      value={squares[i]}
    />
  }

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

export default Board

