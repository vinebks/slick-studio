import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    'Logo Navbar'
    'Sidebar Content';
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 5rem calc(100vh - 5rem);
`;
