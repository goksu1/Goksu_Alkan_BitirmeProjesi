import styled from "styled-components";


export const Styled = styled.div`
width: 300px;
display: flex;
align-items: center;
padding: 1rem;
  .delete-button{
    width: 80px;
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
  };
  };
  .extra{
    border: 1px;
    border-radius: 0.5rem;

  }
  .a{
    display:flex ;
      
  }
 .label{
 
  width: 20%;
  height:20%;
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify:space-between;
  align-items: center;
 }

 .duedate{
  
  width: 20%;
  height:20%;
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify:space-between;
  align-items: center;
 }
 .checklist{
 
  width: 20%;
  height:20%;
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify:space-between;
  align-items: center;
 }
 .material-symbols-outlined{
  color: black;
 }
 .description{
  display:flex;
  flex-direction: column;
  width:400px;
  height:50px;

 }
`;
