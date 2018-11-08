import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleBasic extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu color='yellow'>
        <Menu.Item
          name='Start a Game'
          active={activeItem === 'Start a Game'}
          onClick={this.handleItemClick}
        >
          Start a Game
        </Menu.Item>

        <Menu.Item name='Create a Character' active={activeItem === 'Create a Character'} onClick={this.handleItemClick}>
          Create a Character
        </Menu.Item>

        <Menu.Item
          name='View Profile'
          active={activeItem === 'View Profile'}
          onClick={this.handleItemClick}
        >
          View Profile
        </Menu.Item>
      </Menu>
    )
  }
}
