import styled from "styled-components";

export const Box = styled.section`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100px;
  margin: 8px;
  justify-content: center;
  align-items: center;
  justify-self: center;

  a {
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 100px;
    margin: 8px;
    justify-content: center;
    align-items: center;
    justify-self: center;
    background-color: transparent;
    border-radius: 20px;
    border: 2px solid yellow;
  }
`;
