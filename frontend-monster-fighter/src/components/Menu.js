import React from 'react'
import MonsterCard from './MonsterCard'
import GameController from './GameController'
import NewMonsterForm from './NewMonsterForm'

import {Container, Grid, Card, Image, Segment} from 'semantic-ui-react'

class Menu extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectedFighter: null
    }

  }

  selectMonsterhandler = (monster) => {
    console.log(`you clicked monster ${monster.name}`, monster.moves)
    this.setState({
      selectedFighter: monster
    })
  }


  render(){
    return(
      <Grid celled>
        <Grid.Row>
          <Grid.Column width={3}>
            Monster Hp
          </Grid.Column>
          <Grid.Column width={13}>
            Current move being used
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column style={{overflow: 'auto', maxHeight: 200 }} width={5}>
            {this.props.fighters.map(monster => <MonsterCard selectMonster={this.selectMonsterhandler} key={monster.id} monster={monster}/>)}
          </Grid.Column>
          <Grid.Column style={{overflow: 'auto', maxHeight: 200 }} width={8}>
            {this.state.selectedFighter === null ? null : <GameController  fighter={this.state.selectedFighter}/>}
          </Grid.Column>
          <Grid.Column style={{overflow: 'auto', maxHeight: 200 }} width={3}>
            {this.props.enemies.map(monster => <MonsterCard selectMonster={()=>{}} key={monster.id} monster={monster} />)}
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          {this.props.moves.length === 0 ? null : <NewMonsterForm moves={this.props.moves}/> }

        </Grid.Row>

      </Grid>
    )
  }
}
 export default Menu
