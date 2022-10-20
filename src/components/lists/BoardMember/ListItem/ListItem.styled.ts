import styled from "styled-components";
export const CardBoardMember =styled.div`
box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.4);
width:100%;
display: flex;
flex-direction:column;
align-items: center;
padding: 1rem;
margin-right: 0.5rem;
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
}
`;