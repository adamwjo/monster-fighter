import React, { Component } from 'react';
import Nav from './components/Nav'
import Adapter from './Adapter'
import Arena from './components/Arena'
import Menu from './components/Menu'


class Game extends Component {

  constructor() {
    super()

    this.state = {
      users: [],
      moves: [],
      monsters: [],
      loaded: false
    }
  }

  componentDidMount() {
    // The working hostname is passed here, will change by port
    // Invoke rails s -p 3001 in backend to run on correct port
    const adapter = new Adapter("http://localhost:3001")

    adapter.getAll("/monsters").then(allMonsters => this.setState({monsters: allMonsters}))
    adapter.getAll("/users").then(allUsers => this.setState({users: allUsers}))
    adapter.getAll("/moves").then(allMoves => this.setState({moves: allMoves}))
    this.setState({loaded: true})
  }

  render() {
    if (this.state.loaded === true) {
      return (

        <div className="Game">
          <Nav />
          <Arena enemy={this.state.monsters[1]} monsters={this.state.monsters} />
          <Menu moves={this.state.moves} monsters={this.state.monsters}/>
        </div>
      )
    }
    else {
       return null
    }
  }
}

export default Game;
