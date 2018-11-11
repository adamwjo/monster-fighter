import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import MovesMenu from './MovesMenu'
import StatsMenu from './StatsMenu'

class GameController extends Component {
  constructor(){
    super()
    this.state = {
      activeItem: 'Moves'
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Grid>
        <Grid.Column stretched width={12}>
          <Segment>
            {this.state.activeItem === 'Moves'? <MovesMenu moves={this.props.fighter.moves}/> : null}
            {this.state.activeItem === 'Stats'? <StatsMenu fighter={this.props.fighter} /> : null }
  
          </Segment>
        </Grid.Column>

        <Grid.Column width={4}>
          <Menu fluid vertical tabular='right'>
            <Menu.Item name='Moves' active={activeItem === 'Moves'} onClick={this.handleItemClick} />
            <Menu.Item
              name='Stats'
              active={activeItem === 'Stats'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='links'
              active={activeItem === 'links'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Grid.Column>
      </Grid>
    )
  }
}

export default GameController
