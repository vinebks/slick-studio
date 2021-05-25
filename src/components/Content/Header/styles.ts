import styled from "styled-components";

export const ContentHeader = styled.header`
  > section {
    max-width: 110rem;
    padding-top: 4rem;
    padding-left: 5rem;
    padding-bottom: 4rem;
    margin: 0 0rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: linear-gradient(
      90deg,
      rgba(255, 230, 0, 0.8631827731092436) 0%,
      rgba(32, 32, 39, 1) 0%,
      rgba(15, 18, 25, 1) 55%,
      rgba(255, 230, 0, 0.8071603641456583) 100%
    );
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};

    h1 {
      font-size: 32px;
      color: ${({ theme }) => theme.colors.yellow};
    }

    div {
      display: flex;
      align-items: center;
    }
  }
`;
