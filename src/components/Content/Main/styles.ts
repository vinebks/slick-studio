import styled from 'styled-components';

export const MainContainer = styled.section`
  > section {
    max-width: 60rem;
    padding-top: 4rem;

    margin: 0 20rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  > table {
    width: 100%;

    border: 0;

    padding-top: 3rem;

    /* border-spacing: 0 0.5rem; */

    text-align: center;

    margin: 0;

    th {
      padding: 1rem 2rem;
      border-top: 1px solid ${({ theme }) => theme.colors.grey};
      border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
      /* line-height: 1.5rem; */
      font-weight: 700;
      color: ${({ theme }) => theme.colors.blue};
    }

    td {
      padding: 1rem 2rem 1rem 2rem;
      border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
      line-height: 1.5rem;
      font-weight: normal;

      transition: background 0.2s;

      &:hover {
        background: ${({ theme }) => theme.colors.darkGrey};
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;

export const Records = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 12rem;
  width: 100%;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.darkGrey};
    border-radius: 20px;
    width: 3rem;
    height: 2rem;
  }
`;

export const RawInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  max-width: 25rem;
  width: 100%;

  span {
    font-weight: bold;
    text-decoration: underline;
    text-decoration-thickness: 2px;

    &:hover {
      cursor: pointer;
    }
  }

  input {
    height: 2.2rem;
    border-radius: 1rem;
    border: 0;
    width: 13rem;
    position: relative;
    padding: 1rem;
    background: ${({ theme }) => theme.colors.darkGrey};
    color: ${({ theme }) => theme.colors.lightGrey};

    &::placeholder {
      color: ${({ theme }) => theme.colors.lightGrey};
    }
  }
`;
