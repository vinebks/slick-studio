import styled from "styled-components";

export const MainContainer = styled.section`
  max-width: 101rem;
  max-height: 40rem;
  min-height: 40rem;
  overflow-y: scroll;
  border-top: 1px solid ${({ theme }) => theme.colors.black};

  &::-webkit-scrollbar {
    width: 2px;
    border: 0px solid ${({ theme }) => theme.colors.darkGrey};
  }

  @media (max-width: 1600px) {
    max-width: 75vw;
  }

  @media (max-width: 1400px) {
    max-width: 65vw;
  }

  > section {
    max-width: 120rem;
    padding-top: 2rem;
    padding-left: 4rem;

    @media (max-width: 1400px) {
      margin: 0 5rem;
    }

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  > table {
    width: 100%;
    border: 0;
    padding-top: 1rem;
    text-align: center;

    th {
      padding: 1rem 1rem;
      border-top: 0px solid ${({ theme }) => theme.colors.grey};
      border-bottom: 2px solid ${({ theme }) => theme.colors.grey};
      border-left: 0px solid ${({ theme }) => theme.colors.grey};
      border-right: 0px solid ${({ theme }) => theme.colors.grey};
      font-weight: 700;
      color: ${({ theme }) => theme.colors.yellow};
      background: linear-gradient(
        0deg,
        rgba(15, 18, 25, 1) 6%,
        rgba(32, 32, 39, 1) 62%,
        rgba(32, 32, 39, 1) 100%
      );
    }

    td {
      padding: 1rem 2rem 1rem 2rem;
      border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
      line-height: 1.5rem;
      font-weight: normal;

      a {
        color: ${({ theme }) => theme.colors.white};
        text-decoration: none;
      }

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

  max-width: 15rem;
  width: 100%;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.darkGrey};
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
  }
`;

export const RawInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  max-width: 30rem;
  width: 100%;

  span {
    font-weight: bold;
    text-decoration: underline;
    text-decoration-thickness: 2px;
    padding: 0 2rem;

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
