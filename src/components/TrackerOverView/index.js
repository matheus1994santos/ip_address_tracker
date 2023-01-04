import React from 'react'

import { Container } from './styles'

const TrackerOverView = ({children, ...otherProps}) => {
  return (
    <Container {...otherProps}>
        {children}
    </Container>
  )
}

export default TrackerOverView
