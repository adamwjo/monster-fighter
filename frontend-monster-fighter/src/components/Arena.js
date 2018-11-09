import React, {Component} from 'react'
import {Container, Header, Grid} from 'semantic-ui-react'
import MonsterCard from './MonsterCard'
import '../css/Arena.css'

export default class Arena extends Component {
  constructor(props){
    super(props)
    this.state = {
      playerMonser: [],
      turnCount: 0,
      currentTurn: null,
      background: this.props.background
    }
  }




  render() {
    console.log("in arena render", this.props.enemy);
    return (
      <div className='arena'>
        <Container fluid>
          <Grid celled>

            <Grid.Column width={8} >
              PLayer
            </Grid.Column>

            <Grid.Column width={8} >
              {this.props.enemy === undefined ? null : <MonsterCard monster={this.props.enemy}/>}

            </Grid.Column>
          </Grid>
        </Container>
      </div>
    )
  }
}
