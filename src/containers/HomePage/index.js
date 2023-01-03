import React from 'react'

import Header from '../../components/Header'
import LocationInfo from '../../components/LocationInfo'

import Search from '../../components/Search'
import TrackerOverView from '../../components/TrackerOverView'

import { Container } from './styles'

const Page = () => {
  const [value, setValue] = React.useState('');
  const [ locationInfo, setLocationInfo ] = React.useState([]);

  function getValue({target}){
    setValue(target.value)
  }

  // function handleClick(){
  //   fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_tJ7KPlm2u9yCqC6eCwGlhqBZ2ImX9&ipAddress=${value}`)
  //   .then( json => json.json() )
  //   .then( dados => setLocationInfo(dados) )  
  //   .then( dados => console.log(dados))
  // }

  return (
    <Container>
      <TrackerOverView>
        <Header title={'IP Address Tracker'}/>
        <Search stateValue={value} onGetValue={getValue}/>
        <LocationInfo info={locationInfo}/>
      </TrackerOverView>
    </Container>
  )
}

export default Page
