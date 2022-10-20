import styled from "styled-components";
export const Styled = styled.div`
width:80px;
  padding-left: 0.1rem;
  padding-right: 0.1rem;
display: flex;
margin-top:10px;
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
