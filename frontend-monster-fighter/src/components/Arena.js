import React, {Component} from 'react'
import '../css/Arena.css'

export default class Arena extends Component {
  constructor(props){
    super(props)
    this.state = {
      turnCount: 0,
      currentTurn: null,
      background: this.props.background
    }
  }
  render() {
    return (
      <div className='arena'>
        <p>This is where monsters do battle</p>
      </div>
    )
  }
}
