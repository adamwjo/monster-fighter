import React from 'react'
import { Button, Icon, Image, Item, Label } from 'semantic-ui-react'

const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
const Move = (props) => {
  return(
    <Item onClick={() => {props.useMove(props.move)}}>
      <Item.Image src={props.move.img} />

      <Item.Content>
        <Item.Header as='a'>{props.move.name}</Item.Header>
        <Item.Meta>
          <span className='cinema'>Dmg: {props.move.lowDmg} - {props.move.highDmg}</span>
        </Item.Meta>
        <Item.Description>{props.move.description}</Item.Description>
        <Item.Extra>
          <Label>Select</Label>
        </Item.Extra>
      </Item.Content>
    </Item>
  )
}

export default Move
