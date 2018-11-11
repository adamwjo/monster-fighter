import React from 'react'

class StatsMenu extends React.Component {
  constructor(){
    super()
  }

  formatDate = () => {
    const birthday = new Date(this.props.fighter.created_at)
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]

    const month = monthNames[birthday.getMonth()]
    const day = birthday.getDay()
    const year = birthday.getFullYear()

    return `${month} ${day}, ${year}`
  }

  render(){
    return(
      <div>
        <h2>{this.props.fighter.name}</h2>
        <p>HP: {this.props.fighter.hp}</p>
        <p>Description: {this.props.fighter.description}</p>
        <p>Birthday: {this.formatDate()}</p>
      </div>
    )
  }
}

export default StatsMenu
