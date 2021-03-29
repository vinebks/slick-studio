import styled from 'styled-components';

export const SidebarContainer = styled.section`
  grid-area: Sidebar;
  border-right: 1px solid ${({ theme }) => theme.colors.grey};

  nav {
    height: 40rem;
    padding-top: 4rem;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;

    @media (max-width: 1440px) {
      height: 29rem;
    }

    a {
      display: flex;
      align-items: center;
      position: relative;

      margin: 0 4rem;

      color: ${({ theme }) => theme.colors.lightGrey};

      font-size: ${({ theme }) => theme.fontSize.large};

      transition: color 0.2s;

      @media (max-width: 1600px) {
        font-size: ${({ theme }) => theme.fontSize.medium};
      }

      &:hover {
        color: ${({ theme }) => theme.colors.blue};

        &::after {
          content: '';
          position: absolute;
          left: 1px;
          bottom: 0;
          margin-left: -4rem;
          height: 1.7rem;
          width: 3px;
          border-radius: 0 2px 2px 0;
          background: ${({ theme }) => theme.colors.blue};
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
