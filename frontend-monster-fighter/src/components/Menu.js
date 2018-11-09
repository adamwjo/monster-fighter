import React from 'react'
import MonsterCard from './MonsterCard'
import GameController from './GameController'
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
            Monster Hp
          </Grid.Column>
          <Grid.Column width={13}>
            Current move being used
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column style={{overflow: 'auto', maxHeight: 200 }} width={5}>
            {this.props.monsters.map(monster => <MonsterCard monster={monster}/>)}
          </Grid.Column>
          <Grid.Column style={{overflow: 'auto', maxHeight: 200 }} width={8}>
            <GameController moves={this.props.moves}/>

          </Grid.Column>
          <Grid.Column width={3}>
            additional info
          </Grid.Column>
        </Grid.Row>

      </Grid>
    )
  }
}
 export default Menu
