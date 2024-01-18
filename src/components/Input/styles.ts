import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  font-family: 'Montserrat', sans-serif;

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    box-shadow: 0 0 0 30px ${({ theme }) => theme.background_primary_blue} inset !important;
    color: ${({ theme }) => theme.font_primary} !important;
  }

  .MuiTextField-root {
    label,
    p {
      &.Mui-focused {
        color: ${({ theme }) => theme.stroke_primary} !important;
        font-family: 'Montserrat', sans-serif;
      }

      &.Mui-error {
        color: red!important;
      }

      color: ${({ theme }) => theme.stroke_primary};
      font-family: 'Montserrat', sans-serif;
    }

    > .MuiInputBase-root {
      &.Mui-focused {
        input {
          color: ${({ theme }) => theme.font_primary} !important;
        }

        fieldset {
          border-color: ${({ theme }) => theme.stroke_primary} !important;
        }
      }

      &.Mui-error {
        label,
        p {
          color: red !important;
        }

        input {
          color: red !important;
        }

        fieldset {
          border-color: red !important;
        }
      }

      input {
        color: ${({ theme }) => theme.font_primary};
        font-family: 'Montserrat', sans-serif;
      }

      fieldset {
        border-color: ${({ theme }) => theme.stroke_primary};
        font-family: 'Montserrat', sans-serif;
      }
    }
  }
`;
