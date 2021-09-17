import styled from "styled-components";

export const Container = styled.div`
  min-width: 99vw;
  min-height: 61.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkGrey};
`;

export const ManagerProfileComponent = styled.div`
  display: flex;
  max-width: 100vw;
  max-height: 100vw;
  min-height: 55rem;
  min-width: 65rem;
  box-shadow: 1px 5px 25px 10px black;
  flex-direction: column;
  border-radius: 20px;
  justify-content: flex-start;
  align-items: center;
  border: 3px solid ${({ theme }) => theme.colors.yellow};
  background-color: ${({ theme }) => theme.colors.black};
`;

export const HeaderComponent = styled.div`
  display: flex;
  min-height: 15rem;
  min-width: 65rem;
  border-radius: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  border-bottom: 3px solid ${({ theme }) => theme.colors.yellow};

  img {
    border-radius: 50%;
    max-width: 12rem;
    margin-right: 2rem;

    transition: transform 0.2s;

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }

  div {
    display: flex;
    border-radius: 15px;
    min-height: 13rem;
    min-width: 47rem;
    justify-content: center;
    align-items: center;
    margin: 0 2rem;
    background-color: ${({ theme }) => theme.colors.black};

    h1 {
      font-weight: bold;
      font-size: 25px;
    }
  }
`;

export const BodyComponent = styled.div`
  display: flex;
  margin-top: 1rem;
  min-height: 39rem;
  min-width: 65rem;
  padding: 2rem;
  border-radius: 15px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.black};

  div {
    display: flex;
    border-radius: 15px;
    min-height: 3rem;
    min-width: 30rem;
    padding: 0.5rem;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: ${({ theme }) => theme.colors.black};

    h1 {
      font-weight: bold;
      font-size: 25px;
    }

    input {
      margin-top: 1rem;
      width: 9rem;
      background-color: ${({ theme }) => theme.colors.darkGrey};
      border-radius: 20px;
      padding-left: 2rem;
    }

    button {
      margin: 1rem 1rem;
      width: 9rem;
      height: 2rem;
      background-color: ${({ theme }) => theme.colors.yellow};
      border-radius: 20px;

      &:hover {
        transition: transform 0.25s;
        font-weight: bold;
      }
    }
  }
`;
