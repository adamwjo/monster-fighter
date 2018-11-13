import React, {Component} from 'react'
import {Container, Header, Grid, Segment} from 'semantic-ui-react'
import MonsterCard from './MonsterCard'
import '../css/Arena.css'

export default class Arena extends Component {
  constructor(props){
    super(props)
    this.state = {
      enemyHp: null,
      turnCount: 0,
      currentTurn: null,
      loaded: false,
      backgrounds: ['b-caves', 'b-cityscape', 'b-default', 'b-dusk-meadow', 'b-lava-temple', 'b-mountains', 'b-retro-mountains', 'b-seaside-caves', 'b-timezone-split']
    }
  }

  componentDidMount() {
    this.setState({loaded: true})
  }

  selectBackground = () => {
    const len = this.state.backgrounds.length
    const sample = Math.floor(Math.random() * len)
    return this.state.backgrounds[sample]
  }

  selectEnemy = () => {
    const len = this.props.enemies.length
    const sample = Math.floor(Math.random() * len)
    this.setState({enemyMonster: this.props.enemies[sample]})
  }

  componentDidUpdate(){
    if (this.props.enemyHp < 0) {
      if (this.props.selectedEnemy === null) {
        return console.log("enemy is dead");
      }
      else {
        this.props.killEnemey()
      }
    }
  }

  render() {
    if (this.state.loaded === true) {
      return (
        <div className='arena' id={`${this.selectBackground()}`}>
          <Container fluid>
            <Grid container columns={2}>

              <Grid.Column >

                {this.props.selectedFighter === null ? null : <MonsterCard size="large" monster={this.props.selectedFighter}/>}

              </Grid.Column>

              <Grid.Column >
                
                {this.props.selectedEnemy === null ? null : <MonsterCard monster={this.props.selectedEnemy}/>}
              </Grid.Column>
            </Grid>
          </Container>
        </div>
      )
    }
    else {
      return null
    }
  }
}
