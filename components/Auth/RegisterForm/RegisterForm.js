import React from 'react'

export default function RegisterForm({ showLoginForm }) {
  return (
    <div>
      <h1>Formulario de registro</h1>
      <button onClick={showLoginForm}>Ir al login</button>
    </div>
  )
}
