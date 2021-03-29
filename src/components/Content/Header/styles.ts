import styled from 'styled-components';

export const ContentHeader = styled.header`
  > section {
    max-width: 60rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
    margin: 0 20rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 32px;
    }

    div {
      display: flex;
      align-items: center;

      span:first-child {
        font-size: ${({ theme }) => theme.fontSize.medium};
        margin-right: 1rem;
        font-weight: 400;
      }

      span:not(:first-child) {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 2rem;
        width: 2rem;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.blue};
        color: white;
        font-weight: bold;
        margin-right: -4px;
        z-index: 999;
      }

      span:not(:first-child) + span:not(:first-child) {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 2rem;
        width: 2rem;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.purple};
        color: white;
        font-weight: bold;
        z-index: 1;
      }
    }
  }
`;
