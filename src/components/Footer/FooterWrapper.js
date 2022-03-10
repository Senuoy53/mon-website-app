import styled from "styled-components";
import { mobile } from "../../styles/responsive";

export const FooterWrapper = styled.footer`
  padding: 1.5rem 5%;
  box-shadow: 0 -0.5rem 1rem rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.PinkColor};

  ${mobile({
    padding: "1.5rem 1%",
  })}
`;
