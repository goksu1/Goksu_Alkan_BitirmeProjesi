import styled from "styled-components";
export const Styled = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  .add-button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    background-color: #b62018;
    color: #fff;
    margin-left: 0.5rem;
    font-weight: bold;
    span {
      margin-left: 0.5rem;
    }
    .react-select {
      margin: 1rem;
      position: absolute;
      width: 10rem;
    }
    
    .react-select
      .react-select__control--is-focused.react-select__control--menu-is-open {
      border-color: red;
      box-shadow: 0 0 10px 1px pink;
    }
  // .board-select {
  //   margin-left: 0.5rem;
  //   border: 1px solid #b62018;
  //   border-radius: 0.5rem;
  //   background-color: inherit;
  //   height: 40px;
  // }

`;

