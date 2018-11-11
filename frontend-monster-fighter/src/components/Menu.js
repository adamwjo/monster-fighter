import React from 'react'
import MonsterCard from './MonsterCard'
import GameController from './GameController'
import NewMonsterForm from './NewMonsterForm'

import {Container, Grid, Card, Image, Segment} from 'semantic-ui-react'

class Menu extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectedMonster: null
    }

  }

  selectMonsterhandler = (monster) => {
    console.log(`you clicked monster ${monster.name}`, monster.moves)
    this.setState({
      selectedMonster: monster
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
            {this.props.monsters.map(monster => <MonsterCard selectMonster={this.selectMonsterhandler} key={monster.id} monster={monster}/>)}
          </Grid.Column>
          <Grid.Column style={{overflow: 'auto', maxHeight: 200 }} width={8}>
            {this.state.selectedMonster === null ? null : <GameController  moves={this.state.selectedMonster.moves}/>}


          </Grid.Column>
          <Grid.Column width={3}>
            additional info
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
