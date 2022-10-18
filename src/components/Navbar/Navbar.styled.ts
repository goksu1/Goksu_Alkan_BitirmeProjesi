import styled from "styled-components";

export const Styled = styled.nav`
  background-color: #ee3124;
  position: fixed;
  top: 0;
  width: 100%;

  ul {
    display: flex;
    justify-content: flex-end;
  }
  a {
    color: #ffffff;
    margin-right: 1rem;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  .logout-btn {
    color: #ffffff;
    border: none;
    outline: none;
    background-color: inherit;
    cursor: pointer;
  }
  .welcome-span {
    color: #ffffff;
    margin-right: 1rem;
    font-weight: bold;
  }
`;
