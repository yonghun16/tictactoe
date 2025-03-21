import React from 'react'
import './Squre.css'

const Squre = ({onClick, value}) => {
  return (
    <button className="squre" onClick={onClick}>  {/* 사각형을 클릭하면 onClick*/}
      {value}                                     {/* 클릭에 의해 다시 렌더링이 되면 value가 변경 됨*/}
    </button>
  );
}

export default Squre
