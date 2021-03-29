import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    'Logo Navbar'
    'Sidebar Content';
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 5rem 100%;

  @media (max-width: 1600px) {
    grid-template-columns: 1fr 5fr;
  }
`;
