import Link from "next/link";
import styled from "styled-components";

export const Container = styled.section`
  min-width: 100vw;
  min-height: 45vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const LoginFormComponent = styled.div`
  display: flex;
  max-width: 100vw;
  max-height: 100vw;
  min-height: 25rem;
  min-width: 25rem;
  box-shadow: 1px 5px 25px 10px black; 
  flex-direction: column;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  border: 3px solid ${({ theme }) => theme.colors.yellow};
  background-color: ${({ theme }) => theme.colors.black};

  img {
    filter: brightness(200%);
    max-width: 7rem;
    margin-left: 1rem;
    padding-bottom: 3rem;

    transition: transform 0.2s;

    &:hover {
      cursor: pointer;
    }
  }

  button {
    height: 2.2rem;
    border-radius: 1rem;
    width: 10rem;
    margin: 1rem;

    &:hover {
      background: ${({ theme }) => theme.colors.yellow};
      color: color: ${({ theme }) => theme.colors.darkGrey};
      font-weight: bold;
      transition: 0.2s;
    }
  }

  input {
    height: 2.2rem;
    border-radius: 1rem;
    border: 0;
    width: 19rem;
    position: relative;
    padding-left: 2rem;
    margin: 0.5rem;
    background: ${({ theme }) => theme.colors.darkGrey};
    color: ${({ theme }) => theme.colors.lightGrey};

    &::placeholder {
      color: ${({ theme }) => theme.colors.lightGrey};
    }
  }
`;

export const Footer = styled.div`
  min-width: 100vw;
  min-height: 6vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  border-top: 1px solid ${({ theme }) => theme.colors.yellow};

  h6 {
    font-size: 10px;
    width: 50%;
    text-align: center;
  }
`;

export const LinkLogin = styled(Link)`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.yellow};
`;
