import styled from "styled-components";
import { mobile, tablette768 } from "../../styles/responsive";
import { theme } from "../../styles/global-styles";

export const HeadingWrapper = styled.h1`
  text-align: center;
  margin: 0 6rem;
  font-size: 30px;
  padding: 16px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.PinkColor};
  color: ${({ theme }) => theme.colors.White};

  /* Media query */
  ${tablette768({
    fontSize: "20px",
  })}

  /* Media query */
  ${mobile({
    fontSize: "14px",
    margin: "0 0rem",
  })}

  span {
    color: ${({ theme }) => theme.colors.PinkColor};
  }
`;
