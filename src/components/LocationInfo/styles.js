import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  top: 16px;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 16px;
  z-index: 1;

  @media (max-width: 780px){
    max-width: 700px;
  }

  @media (max-width: 500px){
    flex-direction: column;
  }
`;


export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 15px;
  width: 272px;
  min-height: 160px;
  padding: 34px 28px 22px 32px;

  @media (max-width: 780px){
    width: 700px;
    padding: 18px 16px;

    h5{
      font-size: 11px;
    }

    h1{
      font-size: 22px;
    }
  }

  @media (max-width: 500px){
    flex-direction: column;
    padding: 0;
    width: 360px;
    justify-content: center;
    align-items: center;
    min-height: 90px;
    gap: 0px;

    h5{
      font-size: 11px;
    }

    h1{
      font-size: 22px;
    }
  }

  h5{
    font-size: 13px;
    font-family: 'Rubik';
    color: hsl(0, 0%, 59%);
    letter-spacing: 1.725px;
  }

  h1{
    font-size: 28px;
    font-weight: 500;
  }
`;

export const StyledLine = styled.div`
  border-left: 1px solid #ccc;
  height: 78px;

  @media (max-width: 500px){
    display: none;
  }
`;