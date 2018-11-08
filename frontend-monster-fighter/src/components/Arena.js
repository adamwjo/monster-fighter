import React, {Component} from 'react'
import {Container, Header} from 'semantic-ui-react'
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
      <Container fluid>
        <div className='arena'>
          <Header as="h3">This is where monsters do battle</Header>
        </div>
      </Container>
    )
  }
}
