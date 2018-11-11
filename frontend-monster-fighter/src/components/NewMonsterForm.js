import React from 'react'
import { Button, Checkbox, Form, Modal, Dropdown} from 'semantic-ui-react'

export default class NewMonsterForm extends React.Component {

  render(){
    return(
      <Form>
        <Form.Field>
          <label>Name</label>
          <input placeholder='Name' />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <input placeholder='Description' />
        </Form.Field>
        <Form.Field>
          <label>Img </label>
          <input placeholder='Img ' />
        </Form.Field>
        <Form.Field>
          <Dropdown text="Select Move 1">
            <Dropdown.Menu>
              {this.props.moves.map(move => <Dropdown.Item text={move.name} move={move}/>)}
            </Dropdown.Menu>
          </Dropdown>
        </Form.Field>
        <Form.Field>
          <Dropdown text="Select Move 2">
            <Dropdown.Menu>
              {this.props.moves.map(move => <Dropdown.Item text={move.name} move={move}/>)}
            </Dropdown.Menu>
          </Dropdown>
        </Form.Field>
        <Form.Field>
          <Dropdown text="Select Move 3">
            <Dropdown.Menu>
              {this.props.moves.map(move => <Dropdown.Item text={move.name} move={move}/>)}
            </Dropdown.Menu>
          </Dropdown>
        </Form.Field>
        <Form.Field>
          <Dropdown text="Select Move 4">
            <Dropdown.Menu>
              {this.props.moves.map(move => <Dropdown.Item text={move.name} move={move}/>)}
            </Dropdown.Menu>
          </Dropdown>
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to bring this monster to life' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}
