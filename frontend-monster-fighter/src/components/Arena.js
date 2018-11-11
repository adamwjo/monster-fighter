import React, {Component} from 'react'
import {Container, Header, Grid} from 'semantic-ui-react'
import MonsterCard from './MonsterCard'
import '../css/Arena.css'

export default class Arena extends Component {
  constructor(props){
    super(props)
    this.state = {
      playerMonster: [],
      enemyMonster: [],
      turnCount: 0,
      currentTurn: null,
      background: ['b-caves', 'b-cityscape', 'b-default', 'b-dusk-meadow', 'b-lava-temple', 'b-mountains', 'b-retro-mountains', 'b-seaside-caves', 'b-timezone-split']
    }
  }

  selectBackground = () => {
    const len = this.state.background.length
    const sample = Math.floor(Math.random() * len)
    return this.state.background[sample]
  }



  render() {
    return (
      <div className='arena' id={`${this.selectBackground()}`}>
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
