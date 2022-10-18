import styled from "styled-components";

export const FormStyled = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  .forgot-password {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1.5rem 0;
  }
  .link {
    cursor: pointer;
    color: #4071f4;
    text-decoration: underline;
    margin-left: 0.5rem;
  }
  .conditions {
    margin-bottom: 1rem;
  }
  .register-link,
  .signin-link {
    display: block;
    text-align: center;
  }
`;
