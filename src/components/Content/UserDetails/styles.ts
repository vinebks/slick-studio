import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 48vw;
  min-height: 46.8vw;
  background-color: ${({ theme }) => theme.colors.darkGrey};
`;

export const UserProfileComponent = styled.div`
  margin: 2rem;
  display: flex;
  max-width: 100vw;
  max-height: 20vw;
  min-height: 51rem;
  min-width: 70rem;
  overflow-y: scroll;
  box-shadow: 1px 5px 25px 10px black;
  flex-direction: column;
  border-radius: 20px;
  justify-content: flex-start;
  align-items: center;
  border: 3px solid ${({ theme }) => theme.colors.yellow};
  background-color: ${({ theme }) => theme.colors.darkGrey};

  &::-webkit-scrollbar {
    width: 2px;
    border: 0px solid ${({ theme }) => theme.colors.darkGrey};
  }
`;

export const HeaderComponent = styled.div`
  display: flex;
  min-height: 17rem;
  min-width: 65rem;
  border-radius: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  border-bottom: 0px solid ${({ theme }) => theme.colors.yellow};

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
  margin: 1rem;
  min-width: 65rem;
  max-width: 65rem;
  padding: 2rem;
  border-radius: 15px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.black};
  border-bottom: 3px solid ${({ theme }) => theme.colors.darkGrey};
  border-top: 3px solid ${({ theme }) => theme.colors.darkGrey};

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
