import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  top: 16px;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 16px;
  z-index: 1;
  padding: 32px 0px 26px 0px;

  @media (max-width: 860px){
    max-width: 720px;
    margin: 0 2%;
  }

  @media (max-width: 770px){
    max-width: 640px;
  }

  @media (max-width: 500px){
    flex-direction: column;
    padding: 0;
  }
`;


export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 15px;
  width: 272px;
  min-height: 120px;
  padding: 0px 28px 0px 32px;
  border-right: 1px solid #ccc;

  :last-child {
    border-right: none;
  }

  @media (max-width: 860px){
    max-width: 780px;
  }

  @media (max-width: 780px){
    max-width: 740px;
    padding: 4px 16px;

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
    padding-top: 16px;
    width: 330px;
    align-items: center;
    min-height: 86px;
    gap: 0px;
    border-right: none;

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