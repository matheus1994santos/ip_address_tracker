import React from 'react'
import { Container, StyledInfo, StyledLine } from './styles'

const LocationInfo = ({info, ...otherPros}) => {

  return (
    <Container {...otherPros}>
      <StyledInfo>
        <h5>IP ADDRESS</h5>
        <h1> 192.212.174.101</h1>
      </StyledInfo>
      <StyledLine/>
      <StyledInfo>
        <h5>LOCATION</h5>
        <h1>
          Brooklyn, NY 10001
        </h1>
      </StyledInfo>
      <StyledLine/>
      <StyledInfo>
        <h5>TIMEZONE</h5>
        <h1>
          UTC -05:00
        </h1>
      </StyledInfo>
      <StyledLine/>
      <StyledInfo>
        <h5>ISP</h5>
        <h1>
          SpaceX Starlink
        </h1>
      </StyledInfo>
    </Container>
  )
}

export default LocationInfo
