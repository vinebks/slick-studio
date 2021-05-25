import styled from "styled-components";

export const SidebarContainer = styled.section`
  grid-area: Sidebar;
  max-width: 15rem;
  border-right: 2px solid ${({ theme }) => theme.colors.grey};

  nav {
    height: 8rem;
    padding-top: 4rem;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    max-width: 20rem;

    @media (max-width: 1100px) {
      height: 29rem;
    }

    a {
      display: flex;
      align-items: center;
      position: relative;

      margin: 0 1rem 1rem;

      color: ${({ theme }) => theme.colors.lightGrey};

      font-size: ${({ theme }) => theme.fontSize.medium};

      transition: color 0.2s;

      @media (max-width: 1600px) {
        font-size: ${({ theme }) => theme.fontSize.medium};
      }

      &:hover {
        color: ${({ theme }) => theme.colors.yellow};

        &::after {
          content: "";
          position: absolute;
          left: 1px;
          bottom: 0;
          margin-left: -1rem;
          height: 1.7rem;
          width: 3px;
          border-radius: 0 2px 2px 0;
          background: ${({ theme }) => theme.colors.yellow};
        }
      }

      svg {
        margin-right: 1rem;
        width: 25px;
        height: 25px;
      }
    }
  }
`;
