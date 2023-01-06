import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Container } from "./styles";

function TopNav(props) {
  return (
    <Container>
      <h1>
        <Link to="/">IP Tracker</Link>
      </h1>
      <ul>
        <li>
          <Link to="/user">Perfil</Link>
        </li>
      </ul>
    </Container>
  );
}

TopNav.propTypes = {};

export default TopNav;
