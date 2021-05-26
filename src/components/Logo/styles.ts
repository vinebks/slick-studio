import styled, { css } from "styled-components";

export const LogoContainer = styled.section`
  ${({ theme }) => css`
    grid-area: Logo;
    width: 20rem;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      filter: brightness(200%);
      max-width: 7rem;
      margin-left: 1rem;

      transition: transform 0.2s;

      &:hover {
        cursor: pointer;
      }
    }

    border-bottom: 2px solid ${theme.colors.grey};
  `}
`;
