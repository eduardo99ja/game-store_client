import React from 'react'
import { Form, Button } from 'semantic-ui-react'

export default function AddressForm() {
  return (
    <div>
      <Form>
        <Form.Input
          name='title'
          type='text'
          label='Titulo de la direccion'
          placeholder='Titulo de la direccion'
        />
        <Form.Group widths='equal'>
          <Form.Input
            name='name'
            type='text'
            label='Nombre y apellido'
            placeholder='Nombre y apellidos'
          />
          <Form.Input
            name='address'
            type='text'
            label='Direccion'
            placeholder='Direccion'
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input
            name='city'
            type='text'
            label='Ciudad'
            placeholder='Ciudad'
          />
          <Form.Input
            name='state'
            type='text'
            label='Estado/Provincia/Region'
            placeholder='Estado/provincia/Region'
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input
            name='postalCode'
            type='text'
            label='Código postal'
            placeholder='Código postal'
          />
          <Form.Input
            name='phone'
            type='text'
            label='Número de teléfono'
            placeholder='Número de teléfono'
          />
        </Form.Group>
        <div className='actions'>
          <Button className='submit' type='submit'>
            Crear dirección
          </Button>
        </div>
      </Form>
    </div>
  )
}
