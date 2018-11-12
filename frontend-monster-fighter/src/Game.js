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
      loaded: false,
      selectedFighter: null,
      selectedEnemy: null
    }
  }

  componentDidMount() {
    // The working hostname is passed here, will change by port
    // Invoke rails s -p 3001 in backend to run on correct port
    const adapter = new Adapter("http://localhost:3001")

    // This promise with set state of loaded to true once all adapter method have been resolved
    Promise.all([
    adapter.getAll("/monsters").then(allMonsters => this.setState({monsters: allMonsters})),
    adapter.getAll("/users").then(allUsers => this.setState({users: allUsers})),
    adapter.getAll("/moves").then(allMoves => this.setState({moves: allMoves}))
  ]).then(this.setState({loaded: true}))
  }

  selectFighter = (monster) => {
    console.log(`you clicked monster ${monster.name}`, monster.moves)
    this.setState({
      selectedFighter: monster
    })
  }

  useMove = (event) => {
    console.log(`you used ${event.target.value.name}`)
  }

  calcDamage = (low, high) => {
    return Math.round(Math.random() * (high - low) + low)
  }

  filterMonsters = (type) => {
    if (type === 'fighter') {
      return this.state.monsters.filter(monster => monster.user.id !== 1)
    }
    if (type === 'enemy') {
      return this.state.monsters.filter(monster => monster.user.id === 1)
    }
  }

  render() {
    if (this.state.loaded === true) {
      return (
        <div className="Game">
          <Nav />
          <Arena selectedFighter={this.state.selectedFighter} enemies={this.filterMonsters('enemy')} fighters={this.filterMonsters('fighter')} />
          <Menu selectedFighter={this.state.selectedFighter} selectFighter={this.selectFighter} moves={this.state.moves} enemies={this.filterMonsters('enemy')} fighters={this.filterMonsters('fighter')}/>
        </div>
      )
    }
    else {
       return null
    }
  }
}

export default Game;
