import React from 'react'
import './Squre.css'

export default class Squre extends React.Component {
  render() {
    return (
      <button className="squre">
        {this.props.value}
      </button>
    )
  }
}
