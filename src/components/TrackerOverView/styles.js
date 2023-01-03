import styled from "styled-components";

import ImgHeader from '../../images/pattern-bg.png'

export const Container = styled.section`
  background-image: url(${ImgHeader});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 274px;
  padding: 28px 0;
  gap: 28px;

  @media (max-width: 500px){
    height: 374px;
  }
`;