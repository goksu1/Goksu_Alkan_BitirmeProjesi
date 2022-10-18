import styled from "styled-components";

export const Styled = styled.div`
  margin-top: 10vh;
  p {
    text-align: center;
    margin-top: 2rem;
  }
  .message {
    border: 1px solid;
    padding: 0.5rem;
    background-color: green;
    color: white;
    font-weight: 600;
    &.fail {
      background-color: red;
    }
  }
`;
