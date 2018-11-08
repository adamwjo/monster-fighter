import React, {Component} from 'react'

export default class Arena extends Component {
  constructor(props){
    super(props)
    this.state = {
      turnCount: 0,
      currentTurn: null,
    }
  }
  render() {
    return (
      <span style={this.props.background}></span>
    )
  }
}

Arena.defaultProps = {
  background: require(`../img/default.png`)
}
