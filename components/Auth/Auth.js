import React, { useState } from 'react'
import LoginForm from './LoginForm/LoginForm'
import RegisterForm from './RegisterForm/RegisterForm'

export default function Auth({ onCloseModal, setTitleModal }) {
  const [showLogin, setShowLogin] = useState(true)

  const showLoginForm = () => {
    setTitleModal('Iniciar sesión')
    setShowLogin(true)
  }
  const showRegisterform = () => {
    setTitleModal("Crear nuevo usuario")  
    setShowLogin(false)}
  return showLogin ? (
    <LoginForm showRegisterform={showRegisterform} />
  ) : (
    <RegisterForm showLoginForm={showLoginForm} />
  )
}
