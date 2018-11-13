import React, { Component } from 'react';
import Nav from './components/Nav'
import Adapter from './Adapter'
import Arena from './components/Arena'
import Menu from './components/Menu'

class Game extends Component {

  constructor() {
    super()

    this.state = {
      turn: 1,
      users: [],
      moves: [],
      monsters: [],
      enemyHp: 1,
      playerHp: 1,
      loaded: false,
      selectedFighter: null,
      selectedEnemy: null,
      attackMessage: null
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
    this.setState({
      selectedFighter: monster,
      playerHp: monster.hp

    })
  }

  killPlayer = () => {
    this.setState({
      selectedFighter: null
    })
  }

  selectEnemy = (monster) => {
    this.setState({
      selectedEnemy: monster,
      enemyHp: monster.hp
    })
  }

  killEnemey = () => {
    this.setState({
      selectedEnemy: null
    })
  }

  enemyMove = () => {
    console.log("enemy used a move")
    setTimeout( () => {
      alert("enemy attaced your ass")
      this.setState({
      turn: 1,
      playerHp: this.state.playerHp - 3
    })}, 2000)
  }


  useMove = (move) => {
    let damage = this.calcDamage(move.lowDmg, move.highDmg)
    let newVal = this.state.enemyHp - damage
    if (this.state.turn === 1) {
      this.setState({
        enemyHp: newVal,
        turn: 2,
        attackMessage: "enemy attacked your ass"
      })
      this.enemyMove()
    }
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
          <Arena
            killEnemey={this.killEnemey}
            enemyHp={this.state.enemyHp}
            selectedEnemy={this.state.selectedEnemy}
            selectedFighter={this.state.selectedFighter}
            enemies={this.filterMonsters('enemy')}
            fighters={this.filterMonsters('fighter')} />
          <Menu
            attackMessage={this.state.attackMessage}
            enemyMove={this.enemyMove}
            turn={this.state.turn}
            killEnemey={this.killEnemey}
            useMove={this.useMove}
            selectedFighter={this.state.selectedFighter}
            selectEnemy={this.selectEnemy}
            enemyHp={this.state.enemyHp}
            playerHp={this.state.playerHp}
            selectFighter={this.selectFighter}
            moves={this.state.moves}
            enemies={this.filterMonsters('enemy')}
            fighters={this.filterMonsters('fighter')}/>
        </div>
      )
    }
    else {
       return null
    }
  }
}

export default Game;
