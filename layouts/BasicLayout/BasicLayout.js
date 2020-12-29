import React from 'react'
import classNames from 'classnames'
import { Container } from 'semantic-ui-react'
import Header from '../../components/Header'

export default function BasicLayout(props) {
  const { children, className } = props
  //className='basic-layout'
  return (
    <Container
      fluid
      className={classNames('basic-layout', {
        [className]: className,
      })}
    >
      <Header />
      <Container className='content'>{children}</Container>
    </Container>
  )
}
