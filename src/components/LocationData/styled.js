import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  top: 16px;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 16px;
`;


export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 15px;
  width: 272px;
  height: 160px;
  padding: 34px 28px 22px 32px;

  h5{
    font-size: 13px;
    font-family: 'Rubik';
    color: hsl(0, 0%, 59%);
    letter-spacing: 1.725px;
  }

  h1{
    font-weight: 500;
  }
`;

export const StyledLine = styled.div`
  border-left: 1px solid #ccc;
  height: 78px;
`;