import styled from "styled-components";
export const Styled = styled.div`

  .delete-button{
    idth: 100%;
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
export const ChecklistCard =styled.div`
box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.4);
width:100%;
display: flex;
flex-direction:column;
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
}
.delete-button{
  display:flex;
  align-items: center;
  justify-content: center;
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
