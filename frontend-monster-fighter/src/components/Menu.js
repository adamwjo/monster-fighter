import React from 'react'
import MonsterCard from './MonsterCard'
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
            <Image src='/images/wireframe/image.png' />
          </Grid.Column>
          <Grid.Column width={13}>
            <Image src='/images/wireframe/centered-paragraph.png' />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={5}>
            <Segment style={{overflow: 'auto', maxHeight: 200 }}>
              {this.props.monsters.map(monster => <MonsterCard monster={monster}/>)}

            </Segment>

          </Grid.Column>
          <Grid.Column width={10}>

          </Grid.Column>
          <Grid.Column width={3}>
            <Image src='/images/wireframe/image.png' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
 export default Menu
