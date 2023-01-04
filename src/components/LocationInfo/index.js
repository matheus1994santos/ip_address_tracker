import React from 'react'
import { Container, StyledInfo, StyledLine } from './styles'

const LocationInfo = ({ info = {}, ...otherPros}) => {
  const location = info.location || {};
  const as = info.as || {};

  return (
    <Container {...otherPros}>
      <StyledInfo>
        <h5>IP ADDRESS</h5>
        <h1>{info.ip ? info.ip : ''}</h1>
      </StyledInfo>
      { window.screen.width > 790 ? <StyledLine/> : null}
      <StyledInfo>
        <h5>LOCATION</h5>
        <h1>
          {location.region ? info.location?.region :''}, {location.country ? location.country : ''} {as.asn ? as.asn : ''}
        </h1>
      </StyledInfo>
      { window.screen.width > 790 ? <StyledLine/> : null}
      <StyledInfo>
        <h5>TIMEZONE</h5>
        <h1>
          UTC {location.timezone ? location.timezone : ''}
        </h1>
      </StyledInfo>
      { window.screen.width > 790 ? <StyledLine/> : null}
      <StyledInfo>
        <h5>ISP</h5>
        <h1>
          {info.isp ? info.isp : ''}
        </h1>
      </StyledInfo>
    </Container>
  )
}

export default LocationInfo
