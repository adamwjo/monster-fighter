import React, {Component} from 'react'
import { Card, Icon, Image, Container } from 'semantic-ui-react'

export default class MonsterCard extends Component {

  constructor(props){
    super(props)
  }

  render(){
    return(

        <Card>
          <Card.Content>
            <Image floated="right"  src={this.props.monster.img} />
            <Card.Header>{this.props.monster.name}</Card.Header>
            <Card.Meta>Player Monster</Card.Meta>
            <Card.Description>{this.props.monster.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='bug' />
              10 wins
            </a>
          </Card.Content>
        </Card>

        )
  }
}
