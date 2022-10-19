import styled from "styled-components";
export const Styled = styled.div`
width:100%;


  .delete-button{
  
  color: #fff;
  background-color: #b10f2e;
  height: 2.5rem;
  outline: none;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 600;
  margin-bottom: 0.5rem;
  &:hover {
    background-color: #ef233c;
  }
  &:active {
    background-color: #ef233c;
  }
  }
`;

export const CardChecklistItem =styled.div`
box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.4);
width:300px;
display: flex;
align-items: center;
padding: 1rem;
.delete-checklist{
  flex-direction:column;
}
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
  margin-left: auto;
  font-weight: bold;
  span {
    margin-left: 0.5rem;
  }
}
`;
