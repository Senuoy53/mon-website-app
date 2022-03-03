import styled from "styled-components";

export const ButtonWrapper = styled.button`
  display: inline-block;

  background: ${({ theme }) => theme.colors.PinkColor};
  color: #fff;
  font-size: 16px;
  font-weight: 500;

  cursor: pointer;
  border: none;
  outline: none;

  &:hover {
    background: ${({ theme }) => theme.colors.Gray};
  }
`;
