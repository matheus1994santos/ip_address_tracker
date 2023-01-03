import React from "react";

import arrow from "../../images/icon-arrow.svg";

import { StyledSearch } from "./styled";

// mudar postValue para onSearch
const Search = ({ stateValue, getValue, postValue }) => {
  return (
    <StyledSearch>
      <input
        type="search"
        value={stateValue}
        onChange={getValue}
        placeholder="Search for any IP address or domain"
      />
      <button onClick={postValue}>
        <img src={arrow} alt="Arrow" />
      </button>
    </StyledSearch>
  );
};

export default Search;
