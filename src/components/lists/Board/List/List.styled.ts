import styled from "styled-components";
export const Styled = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-wrap:wrap;

  .list-item {
    width:100%;
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
