import styled, { css } from 'styled-components';

export const LogoContainer = styled.section`
  ${({ theme }) => css`
    grid-area: Logo;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 1.5rem;

    border-right: 1px solid ${theme.colors.grey};
    border-left: 1px solid ${theme.colors.grey};
    border-bottom: 1px solid ${theme.colors.grey};
  `}
`;
