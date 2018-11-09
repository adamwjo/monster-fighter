import React from 'react'
import Move from './Move'
import { Button, Icon, Image, Item, Label } from 'semantic-ui-react'
class MovesMenu extends React.Component {
  constructor(){
    super()
  }

  render(){
    return(
      <Item.Group>
        {this.props.moves.map(move => <Move move={move} key={move.id}/>)}
      </Item.Group>
    )
  }
}

export default MovesMenu
