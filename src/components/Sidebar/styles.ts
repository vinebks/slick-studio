import styled from 'styled-components';

export const SidebarContainer = styled.section`
  grid-area: Sidebar;

  nav {
    height: 40rem;
    padding: 4rem 1rem 0 4rem;

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

      font-size: ${({ theme }) => theme.fontSize.large};

      @media (max-width: 1600px) {
        font-size: ${({ theme }) => theme.fontSize.medium};
      }

      svg {
        margin-right: 1rem;
        width: 25px;
        height: 25px;
      }
    }
  }
`;
