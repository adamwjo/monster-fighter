import React from 'react'
import MonsterCard from './MonsterCard'
import GameController from './GameController'
import NewMonsterForm from './NewMonsterForm'

import {Container, Grid, Card, Image, Segment} from 'semantic-ui-react'

class Menu extends React.Component {
  constructor(props){
    super(props)
  }



  render(){
    return(
      <Grid celled>
        <Grid.Row>
          <Grid.Column width={3}>
            Enemy Hp: {this.props.enemyHp}
          </Grid.Column>
          <Grid.Column width={13}>
            Current move being used
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column style={{overflow: 'auto', maxHeight: 200 }} width={5}>
            {this.props.fighters.map(monster => <MonsterCard onClick={this.props.selectFighter}
              key={monster.id}
              monster={monster}/>)}
          </Grid.Column>
          <Grid.Column style={{overflow: 'auto', maxHeight: 200 }} width={8}>
            {this.props.selectedFighter === null ? null : <GameController
              useMove={this.props.useMove}
              fighter={this.props.selectedFighter}/>}
          </Grid.Column>
          <Grid.Column style={{overflow: 'auto', maxHeight: 200 }} width={3}>
            {this.props.enemies.map(monster => <MonsterCard
              onClick={this.props.selectEnemy}
              key={monster.id}
              enemyHp={this.props.enemyHp}
              monster={monster} />)}
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          {/* {this.props.moves.length === 0 ? null : <NewMonsterForm moves={this.props.moves}/> } */}

        </Grid.Row>

      </Grid>
    )
  }
}
 export default Menu
