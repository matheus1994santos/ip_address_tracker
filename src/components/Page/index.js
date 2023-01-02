import React from 'react'

import Header from '../Header'
import LocationData from '../LocationData'
import Search from '../Search'

import { Container } from './styled'

const Page = () => {
  const [value, setValue] = React.useState('');

  function getValue({target}){
    setValue(target.value)
  }

  return (
    <Container>
      <Header titles={'IP Address Tracker'}>
          <Search stateValue={value} getValue={getValue}/>
          <LocationData/>
      </Header>
    </Container>
  )
}

export default Page
