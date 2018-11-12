import React, {Component} from 'react'
import Adapter from '../Adapter'
import { Button, Form } from 'semantic-ui-react'
import '../css/Login.css'


export default class Login extends Component {
  constructor() {
    super()
    this.state = {
    username: '',
    password: ''
    }
  }

  setChange = event => {
    this.setState({[event.target.placeholder]: event.target.value})
  }

  submitForm = (event) => {
    event.preventDefault()
    const adapter = new Adapter('http://localhost:3001')
    debugger
    adapter.loginUser({
      user: {
        username: this.state.username,
        password: this.state.password
      }
    })
    .then(json => {
      if (json !== undefined) {
        // add jwt, username, and user_id to user storage

        // DOES LOCALSTORAGE RESET ON PAGE-RELOAD?
        localStorage.setItem('jwt', json['jwt'])
        localStorage.setItem('currentUser', json['user'])
        debugger
        // redirect to '/game'
        window.location.href = 'http://localhost:3000/game'
      } else {
        alert('CRITICAL LOGIN FAILURE!')
      }
    })
  }

  render() {
    return(
      <div id="login-page">
        <Form>
          <h2> Login </h2>
          <Form.Field>
            <label>Username</label>
            <input
            placeholder='username'
            onChange={this.setChange}/>
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
            placeholder='password'
            type='password'
            onChange={this.setChange}/>
          </Form.Field>
          <Button
          type='submit'
          onClick={this.submitForm}>
          Submit</Button>
        </Form>
      </div>
    )
  }
}
