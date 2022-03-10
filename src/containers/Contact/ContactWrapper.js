import styled from "styled-components";

const ContactWrapper = styled.section`
  padding: 0rem 5%;
  margin-bottom: 20px;

  /* margin-top: 30px; */
  /* min-height: 80vh; */

  .heading {
    text-align: center;
    margin: 0 6rem;
    font-size: 30px;
    padding: 16px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.PinkColor};
    color: ${({ theme }) => theme.colors.White};

    span {
      color: ${({ theme }) => theme.colors.PinkColor};
    }
  }

  .box-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 16px 0;

    form {
      margin: 20px 10px;
      .input-box {
        display: flex;
        align-items: center;

        .box {
          margin-bottom: 10px;

          height: 83px;
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

        &:hover {
          border: 2px solid ${({ theme }) => theme.colors.PinkColor};
        }

        i {
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
          color: var(--white-color);
          border-radius: 50%;
          border: 1px solid var(--bg-button-color);
          padding: 0.4rem;
          background-color: var(--bg-button-color);
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
