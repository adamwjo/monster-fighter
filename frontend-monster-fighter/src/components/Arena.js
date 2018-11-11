import React, {Component} from 'react'
import {Container, Header, Grid} from 'semantic-ui-react'
import MonsterCard from './MonsterCard'
import '../css/Arena.css'

export default class Arena extends Component {
  constructor(props){
    super(props)
    this.state = {
      playerMonster: null,
      enemyMonster: null,
      turnCount: 0,
      currentTurn: null,
      loaded: false,
      backgrounds: ['b-caves', 'b-cityscape', 'b-default', 'b-dusk-meadow', 'b-lava-temple', 'b-mountains', 'b-retro-mountains', 'b-seaside-caves', 'b-timezone-split']
    }
  }

  componentDidMount() {
    this.selectEnemy()
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

  render() {
    if (this.state.loaded === true) {
      return (
        <div className='arena' id={`${this.selectBackground()}`}>
          <Container fluid>
            <Grid celled>

              <Grid.Column width={8} >
                Player
              </Grid.Column>

              <Grid.Column width={8} >
                {this.props.enemyMonster === undefined ? null : <MonsterCard monster={this.state.enemyMonster}/>}

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
