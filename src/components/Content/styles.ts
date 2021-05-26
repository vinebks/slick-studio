import styled from "styled-components";

export const ContentContainer = styled.section`
  grid-area: Content;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-self: center;
`;

export const Border = styled.span`
  width: 100%;
  display: block;
  border-bottom: 0px solid ${({ theme }) => theme.colors.grey};
`;
