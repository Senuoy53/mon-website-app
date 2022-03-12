import styled from "styled-components";
import { tablette768 } from "../../styles/responsive";

const ContactWrapper = styled.section`
  padding: 0rem 5%;
  margin-bottom: 20px;

  /* margin-top: 30px; */
  /* min-height: 80vh; */
  ${tablette768({
    padding: "1rem 2%",
  })}

  .box-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 16px 0;

    /* Media Query */
    ${tablette768({
      flexDirection: "column",
    })}

    form {
      margin: 20px 10px;
      .input-box {
        display: flex;
        align-items: center;

        /* Media Query */
        ${tablette768({
          flexDirection: "column",
        })}

        .box {
          margin-bottom: 10px;

          height: 83px;

          ${tablette768({
            width: "100%",
          })}
        }
      }

      .input-container {
        /* display: flex;
        align-items: center; */

        border: 1px solid;
        border-radius: 30px;
        padding: 0.5rem 1rem;
        margin-bottom: 1rem;
        margin-right: 1rem;

        /* Media Query */
        ${tablette768({
          width: "100%",
        })}

        &:hover {
          border: 2px solid ${({ theme }) => theme.colors.PinkColor};
        }

        .form-icon {
          color: ${({ theme }) => theme.colors.PinkColor};
          border-radius: 50%;
        }

        textarea {
          width: 100%;
          margin-top: 10px;
          resize: none;
        }

        textarea,
        input {
          padding-left: 0.6rem;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          border: none;
          outline: none;
          background-color: unset;
          opacity: 0.5;
          font-size: 1rem;
          font-weight: bold;
        }
      }

      .button-container {
        margin-top: 10px;
        display: flex;
        align-items: center;

        .loading {
          margin-left: 10px;
          height: 20px;
          width: 20px;
          border: 3px solid ${({ theme }) => theme.colors.PinkColor};
          border-radius: 50%;
          border-right: 3px solid transparent;
          animation: spin 2s linear infinite;
        }
      }
    }
  }
`;

export default ContactWrapper;
