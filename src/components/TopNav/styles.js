import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  height: 70px;
  border-bottom: 1px solid #b4b4b4;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  background-color: #fff;

  & > h1 {
    font-size: 20px;
  }

  ul {
    list-style: none;
  }
`;
