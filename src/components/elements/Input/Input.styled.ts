import styled from "styled-components";

export const Styled = styled.div`
  border-bottom: 1px solid gray;
  height: 35px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 1rem;
  .icon {
    align-self: center;
    color: #777;
  }
  .eye-icon {
    width: 35px;
    align-self: center;
    text-align: center;
    border: none;
    cursor: pointer;
    background-color: #fff;
    &:active {
      border: none;
    }
  }
  input {
    flex-grow: 1;
    border: none;
    line-height: 40px;
    padding-left: 15px;
    outline: none;
  }
`;
