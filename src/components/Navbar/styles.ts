import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  grid-area: Navbar;

  display: flex;
  justify-content: space-around;

  ul {
    display: flex;
    align-items: center;

    li + li {
      margin-left: 2rem;
    }

    li {
      transition: color 0.2s;
      &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.blue};
      }
    }
  }

  div {
    display: flex;
    align-items: center;

    img {
      border-radius: 50%;
      max-width: 3rem;
      margin-left: 1rem;

      transition: transform 0.2s;

      &:hover {
        cursor: pointer;
        transform: scale(1.1);
      }
    }
  }
`;
