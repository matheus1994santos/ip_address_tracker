import React from 'react'

import arrow from '../../images/icon-arrow.svg'

import { StyledSearch } from './styles'

const Search = ({stateValue, onValue, onSearch}) => {

  return (
    <StyledSearch>
      <input 
        type="search" 
        value={stateValue} 
        onChange={onValue}
        placeholder="Search for any IP address or domain"
      />
      <button onClick={onSearch}>
        <img 
          src={arrow} 
          alt="Arrow"
        />
      </button>
    </StyledSearch>
  )
}

export default Search
