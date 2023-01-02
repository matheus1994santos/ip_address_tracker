import React from 'react'
import { Container, StyledInfo, StyledLine } from './styled'

console.log(window.innerWidth)

const LocationData = (props) => {
  const [ data, setData ] = React.useState([]);

  // React.useEffect(()=>{
  //   fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_tTjlPq2N6PEwpjI6XScRORls6lVU8&ipAddress=8.8.8.8`)
  //   .then( json => json.json() )
  //   .then( dados => setData(dados) )  
  //   .then( dados => console.log(dados))
  // }, [data])

  return (
    <Container>
      <StyledInfo>
        <h5>IP ADDRESS</h5>
        <h1>{data.ip ? data.ip : ""}</h1>
      </StyledInfo>
      <StyledLine/>
      <StyledInfo>
        <h5>LOCATION</h5>
        <h1>
        {/* {data.location["region"] ? data.location["region"] + ',' : ''}  {data.location["country"] ? data.location["country"] : ''} {data.as["asn"] ? data.as["asn"] : ''} */}
        </h1>
      </StyledInfo>
      <StyledLine/>
      <StyledInfo>
        <h5>TIMEZONE</h5>
        <h1>
        {/* {data.location["timezone"] ? 'UTC -' + data.location["timezone"] : ''} */}
        </h1>
      </StyledInfo>
      <StyledLine/>
      <StyledInfo>
        <h5>ISP</h5>
        <h1>
        {/* {data.isp ? data.isp : ''} */}
        </h1>
      </StyledInfo>
    </Container>
  )
}

export default LocationData
