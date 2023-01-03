import React from 'react'
import { StyledHeader, StyledTitle } from './styles'

const Header = ({title = '', ...otherProps}) => {
  return (
    <StyledHeader {...otherProps}>
       <StyledTitle>{title}</StyledTitle>
    </StyledHeader>
  )
}

export default Header
