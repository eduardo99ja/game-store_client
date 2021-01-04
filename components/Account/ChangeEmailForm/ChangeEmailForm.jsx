import React from 'react'
import { Form, Button } from 'semantic-ui-react'

export default function ChangeEmailForm({ user, logout, setReloadUser }) {
  return (
    <div className='change-email-form'>
      <h4>
        Cambia tu e-mail <span>(Tu e-mail actual: {user.email})</span>
      </h4>
      <Form>
        <Form.Group widths='equal'>
          <Form.Input name='email' placeholder='Tu nuevo email' />
          <Form.Input
            name='repeatEmail'
            placeholder='Confirma tu nuevo email'
          />
        </Form.Group>
        <Button className='submit'>Actualizar</Button>
      </Form>
    </div>
  )
}
