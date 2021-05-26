import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  max-height: 56rem;
  grid-template-areas:
    "Logo Navbar"
    "Sidebar Content";
  grid-template-columns: 15rem 105rem;
  grid-template-rows: 5rem 100%;

  @media (max-width: 1600px) {
    grid-template-columns: 15rem 105rem;
  }
`;
