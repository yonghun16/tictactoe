import { useState } from 'react'
import"./App.css"
import Board from './components/Board'

function App() {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

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
  const current = history[stepNumber];

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
    const newHistory = history.slice(0, stepNumber + 1);  // 화면에 보이는 history는 건들지 않고, 안보이는 newHistory만듬
    const newCurrent = newHistory[newHistory.length - 1]; // newHistory의 최근 스냅샷
    const newSquares = newCurrent.squares.slice();        // 현재의 사각형들 복사

    if (calculateWinner(newSquares) || newSquares[i]) {   // 승패가 났거나, 최근 사각형들에서 i번째 사각형의 값이 존재한다면,
      return;                                             // 아무 반응하지 않도록 리턴
    }

    newSquares[i] = xIsNext ? 'X' : 'O';                  // xIsNext가 true이면 X, false이면 O을 쓰기
    setHistory([...newHistory, { squares: newSquares}]);  // 현재의 스냅샷(newHistory, newSquares)을 history에 덮어 쓰기
    setXIsNext(!xIsNext);                                 // 순서 바꾸기
    setStepNumber(newHistory.length);
  }

  // 과거로 돌아가는 함수가 담긴 버튼 생성
  const moves =  history.map((step, move) => {            // map(value, index, array), value는 안쓰고 index만 씀
    const desc = move ?                                   // history[move]에서 move가 0이 아니면
    'Go to move #' + move :                               // 요고 출력
    'Go to start';                                        // move가 0이면 요고 출력
    return (
      <li key={move}>
        <button onClick={()=> jumpTo(move)}>
          {desc}
        </button>
      </li>
    )
  })

  // 과거로 돌아가는 함수
  const jumpTo = (step) => {
    setStepNumber(step);                                  // step 단계로 돌아가기
    setXIsNext(step % 2 === 0);                           // step이 2로 나머지가 0이면 true -> X
  }

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
