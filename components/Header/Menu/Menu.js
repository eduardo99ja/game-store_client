import React, { useEffect, useState } from 'react'
import { Container, Menu, Grid, Icon, Label } from 'semantic-ui-react'
import Link from 'next/link'
import BasicModal from '../../Modal/BasicModal/BasicModal'
import Auth from '../../Auth'
import useAuth from '../../../hooks/useAuth'
import { getMeApi } from '../../../api/user'
export default function MenuWeb() {
  const [showModal, setShowModal] = useState(false)
  const [titleModal, setTitleModal] = useState('Iniciar sesión')
  const { auth, logout } = useAuth()
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    //para que el useEffect se asincrono, se crea una funcion anonima que se autollama
    (async () => {
      const response = await getMeApi(logout)
      setUser(response)
    })()
  }, [auth])

  const onShowModal = () => setShowModal(true)
  const onCloseModal = () => setShowModal(false)
  return (
    <div className='menu'>
      <Container>
        <Grid>
          <Grid.Column className='menu__left' width={6}>
            <MenuPlatforms />
          </Grid.Column>
          <Grid.Column className='menu__right' width={10}>
            {auth ? (
              <button onClick={logout}>Cerrar sesion</button>
            ) : (
              <MenuOptions onShowModal={onShowModal} />
            )}
          </Grid.Column>
        </Grid>
      </Container>
      <BasicModal
        show={showModal}
        setShow={setShowModal}
        title={titleModal}
        size='small'
      >
        <Auth onCloseModal={onCloseModal} setTitleModal={setTitleModal} />
      </BasicModal>
    </div>
  )
}

function MenuPlatforms() {
  return (
    <Menu>
      <Link href='/playstation'>
        <Menu.Item as='a'>PS5</Menu.Item>
      </Link>
      <Link href='/xbox'>
        <Menu.Item as='a'>Xbox</Menu.Item>
      </Link>
      <Link href='/switch'>
        <Menu.Item as='a'>Switch</Menu.Item>
      </Link>
    </Menu>
  )
}

function MenuOptions({ onShowModal }) {
  return (
    <Menu>
      <Menu.Item onClick={onShowModal}>
        <Icon name='user outline' />
        Mi Cuenta
      </Menu.Item>
    </Menu>
  )
}
