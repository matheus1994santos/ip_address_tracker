import React from "react";

import Header from "../Header";
import LocationData from "../LocationData";
import Search from "../Search";

import { Container } from "./styled";

// Mudar para homepage, virar um container
// Criar um TrackerOverview que irá conter todos os componentes de Tracker
// mudar nomes de arquivos styled para styles.js
const Page = () => {
  const [value, setValue] = React.useState("");

  function getValue({ target }) {
    setValue(target.value);
  }

  return (
    <Container>
      <Header title="IP Address Tracker">
        <Search stateValue={value} getValue={getValue} />
        <LocationData />
      </Header>
    </Container>
  );
};

export default Page;
