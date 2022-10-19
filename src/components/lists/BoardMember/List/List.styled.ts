import styled from "styled-components";
export const Styled = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  display: flex;
margin-right:2rem;

  .list-item {
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    &:nth-child(odd) {
      background-color: #ffd7c7;
    }
    &:hover {
      background-color: #d8e2dc;
    }
    span {
      cursor: pointer;
    }
  }
`;
