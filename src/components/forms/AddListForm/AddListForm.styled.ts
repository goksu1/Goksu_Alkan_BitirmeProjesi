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
  }
  
  .list-span {
    color: #b10f2e;
    margin: 0 0 40px 0;
  }
`;

export const CardWrapper =styled.div`
.list-span {
  color: #b10f2e;
  align-self: center;
  
}
justify-content: space-around;
margin-left: 3rem;
box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.4);
display: flex;
flex-direction:column;
width:300px;
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
`;

