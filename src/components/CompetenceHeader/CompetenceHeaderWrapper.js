import styled from "styled-components";
import { tablette768 } from "../../styles/responsive";

const CompetenceHeaderWrapper = styled.div`
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    font-size: 30px;
    background-color: ${({ theme }) => theme.colors.PinkColor};
    color: ${({ theme }) => theme.colors.White};
    border-radius: 35px;
    margin-inline: auto;

    ${tablette768({
      width: "40px",
      height: "40px",
      fontSize: "20px",
    })}
  }

  header {
    padding-block: 24px;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.PinkColor};
    text-align: center;
    ${tablette768({
      fontSize: "16px",
    })}
  }
`;

export default CompetenceHeaderWrapper;
