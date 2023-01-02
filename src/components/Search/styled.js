import styled from "styled-components";

export const StyledSearch = styled.div`
    display: flex;


    input[type = "search"]{
      padding: 17px  18px;
      font-size: 18px;
      border-radius: 14px 0px 0px 14px;
      outline: none;
      border: none;
      min-width: 480px;
      font-family: 'Rubik';
      font-weight: 400;
      cursor: pointer;
    }

    button{
      background-color: black;
      color: #FFF;
      border: none;
      border-radius: 0px 12px 12px 0px;
      padding: 0px  24px;
      cursor: pointer;

      img{

      }
    }
`;