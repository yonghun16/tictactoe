import { useState } from 'react'
import"./App.css"
import Board from './components/Board'

function App() {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [xIsNext, setXIsNext] = useState(true);

  // 대각선, 가로선, 세로선
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {  // 값이 존재하고, 세 값이 동일하다면
        return squares[a];  // 그 값(X, O)을 리턴한다. (그 값이 winner다)
      }
    }
    return null;
  }

  // 최근 게임의 상태
  const current = history[history.length - 1];   // history.length - 1 : 최근 게임

  // 승자 구하기
  const winner = calculateWinner(current.squares);

  // 승패 변수
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  }
  else { // 승패가 아직 나지 않았을 때
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  // 사각 버튼을 클릭
  const handleClick = (i) => {
    const newSquares = current.squares.slice();           // 현재의 사각형들 복사

    if (calculateWinner(newSquares) || newSquares[i]) {   // 승패가 났거나, 최근 사각형들에서 i번째 사각형의 값이 존재한다면,
      return;                                             // 아무 반응하지 않도록 리턴
    }

    newSquares[i] = xIsNext ? 'X' : 'O';                  // xIsNext가 true이면 X, false이면 O을 쓰기
    console.log("history", history);
    setHistory([...history, { squares: newSquares}]);     // 현재의 스냅샷을 history에 쓰기
    setXIsNext(!xIsNext);                                 // 순서 바꾸기
  }

  const moves =  history.map((step, move) => {
    const desc = move ? 
    'Go to move #' + move :
    'Go to start';
    return (
      <li key={move}>
        <button onClick={()=> jumpTo(move)}>
          {desc}
        </button>
      </li>
    )
  })

  return (
    <>
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}                     // props로 현재의 사각형들을 전달
            onClick={handleClick}                         // '사각 버튼을 클릭 함수' 전달
          />
        </div>
        <div className="game-info">
          <div className="status"> {status} </div>
          <ol>{moves}</ol>
        </div>
      </div>
    </>
  )
}

export default App
