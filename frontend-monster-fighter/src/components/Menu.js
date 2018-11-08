import React from 'react'
import MonsterCard from './MonsterCard'
import {Container, Grid, Card} from 'semantic-ui-react'

class Menu extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <Container >
        <Card.Group>

          {this.props.monsters.map(monster => <MonsterCard monster={monster}/>)}

        </Card.Group>
      </Container>
    )
  }
}
 export default Menu
