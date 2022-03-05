import styled from "styled-components";

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
  }

  header {
    padding-block: 24px;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.PinkColor};
    text-align: center;
  }
`;

export default CompetenceHeaderWrapper;
