import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  grid-area: Navbar;

  display: flex;
  justify-content: space-around;

  line-height: 5rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};

  ul {
    display: flex;
    align-items: center;

    li + li {
      margin-left: 2rem;
    }

    li {
      transition: color 0.2s;
      position: relative;

      &.active {
        color: ${({ theme }) => theme.colors.blue};
      }

      &.active::after {
        content: '';
        height: 3px;
        border-radius: 3px 3px 0 0;
        width: 100%;
        position: absolute;
        bottom: 1px;
        left: 0;
        background: ${({ theme }) => theme.colors.blue};
      }

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
