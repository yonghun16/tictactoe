import React from 'react'
import './Squre.css'

export default class Squre extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    }
  }

  render() {
    return (
      <button className="squre" onClick={()=>{
        this.setState({value: 'X'});
      }}>
        {this.state.value}
      </button>
    )
  }
}
