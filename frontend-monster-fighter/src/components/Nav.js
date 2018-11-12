import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react'
import { Menu, Button, Header, Image, Form, Checkbox, Dropdown, Segment} from 'semantic-ui-react'

export default class Nav extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu >
        {/*<Menu.Item
          name='Start a Game'
          active={activeItem === 'Start a Match'}
          onClick={this.handleItemClick}
        >
          <Link to="/start-match/"> Start a Game </Link>
        </Menu.Item>

        <Menu.Item active={activeItem === 'Create a Character'} onClick={this.handleItemClick}>
          <Link to="/create-monster/"> Create a Monster </Link>
        </Menu.Item>

        <Menu.Item
          name='View Profile'
          active={activeItem === 'View Profile'}
          onClick={this.handleItemClick}
        >
          <Link to="/profile/"> View Profile</Link>
        </Menu.Item>*/}

      </Menu>
    )
  }
}
