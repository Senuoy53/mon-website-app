import styled from "styled-components";

const CompetenceBottomWrapper = styled.div`
  .list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;

    p {
    }

    .list-img {
      width: 25px;
      height: 25px;
      img {
        width: 100%;
        filter: grayscale(100);
      }
    }
  }
`;

export default CompetenceBottomWrapper;
