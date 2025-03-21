import React, { useState } from 'react'
import Squre from './Squre'
import './Board.css'

const Board = ({squares, onClick}) => {   // 현재 사각형들, 클릭 함수 받음

  const renderSquare = (i) => {
    return <Squre
      onClick={() => onClick(i)}        // 몇 번째 사각형을 클릭 했는지?, i의 값도 내려줌
      value={squares[i]}                // 몇 번째 사각형의 값
    />
  }

  return (
    <div className="board-wrapper">
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

