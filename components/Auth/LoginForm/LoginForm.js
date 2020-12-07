import React from 'react'

export default function LoginForm({showRegisterform}) {
    return (
        <div>
            <h1>Formulario login</h1>
            <button onClick={showRegisterform}>Ir al registro</button>
        </div>
    )
}
