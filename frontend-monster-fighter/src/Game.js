import React, { Component } from 'react';
import Nav from './components/Nav'
import Adapter from './Adapter'
import Arena from './components/Arena'


class Game extends Component {

  constructor() {
    super()

    this.state = {
      users: [],
      moves: [],
      monsters: []
    }
  }

  componentDidMount() {
    // The working hostname is passed here, will change by port
    // Invoke rails s -p 3001 in backend to run on correct port
    const adapter = new Adapter("http://localhost:3001")

    adapter.getAll("/users").then(allUsers => this.setState({users: allUsers}))
    adapter.getAll("/monsters").then(allMonsters => this.setState({monsters: allMonsters}))
    adapter.getAll("/moves").then(allMoves => this.setState({moves: allMoves}))
  }

  render() {
    return (
      <div className="Game">
        <Arena />
      </div>
    );
  }
}

export default Game;
