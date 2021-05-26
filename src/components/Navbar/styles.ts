import styled from "styled-components";

export const NavbarContainer = styled.nav`
  grid-area: Navbar;
  max-width: 100rem;

  display: flex;
  justify-content: space-between;
  padding-left: 4rem;
  padding-right: 2rem;

  line-height: 5rem;

  border-bottom: 2px solid ${({ theme }) => theme.colors.grey};

  ul {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 20px;

    li + li {
      margin-left: 3rem;
    }

    li {
      transition: color 0.2s;
      position: relative;

      &.active {
        color: ${({ theme }) => theme.colors.yellow};
      }

      &.active::after {
        content: "";
        height: 3px;
        border-radius: 3px 3px 0 0;
        width: 100%;
        position: absolute;
        bottom: 1px;
        left: 0;
        background: ${({ theme }) => theme.colors.yellow};
      }

      &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.yellow};
      }
    }
  }

  div {
    display: flex;
    align-items: center;
    font-weight: bold;

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
