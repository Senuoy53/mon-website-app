import styled from "styled-components";

const ToggleWrapper = styled.div`
  width: 50px;
  height: 25px;
  border-radius: 20px;
  border: 1px solid #ff4a57;
  background-color: #fff;
  position: relative;
  /* top: 26px;
  right: 10px;
  z-index: 10; */

  display: flex;
  align-items: center;
  justify-content: space-around;

  .t-icon {
    width: 15px;
    height: 15px;
  }

  .t-button {
    width: 25px;
    height: 25px;
    background-color: #ff4a57;
    border-radius: 50%;
    position: absolute;
    left: 0;
    cursor: pointer;
    transition: all 0.1s linear;
  }
`;

export default ToggleWrapper;
