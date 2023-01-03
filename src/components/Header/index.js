import React from "react";
import { StyledHeader, StyledTitle } from "./styled";

// props => ({ title, ...otherProps })
// remover children
const Header = (props) => {
  return (
    <StyledHeader>
      <StyledTitle>{props.titles}</StyledTitle>
      {props.children}
    </StyledHeader>
  );
};

export default Header;
