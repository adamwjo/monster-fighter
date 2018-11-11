import React, { Component } from 'react'
import { Menu, Button, Header, Image, Form, Checkbox, Dropdown, Segment} from 'semantic-ui-react'

export default class Nav extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu >
        <Menu.Item
          name='Start a Game'
          active={activeItem === 'Start a Game'}
          onClick={this.handleItemClick}
        >
          Start a Game
        </Menu.Item>

        <Menu.Item active={activeItem === 'Create a Character'} onClick={this.handleItemClick}>
          Create a Monster
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
