
import styled from "styled-components";
export const Styled = styled.div`
.DatePickerSelector {
    display: flex;
    align-items: center;
    justify-content: space-between;
  
    height: 42px;
  
    border-bottom: 1px solid #b3b3b3;
    margin-bottom: 8px;
  }
  
  .DatePickerSelector__icon {
    width: 26px;
    height: 26px;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color .2s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .DatePickerSelector__icon:hover {
    background-color: #e0e0e0;
  }
  
  .DatePickerSelector__iconLeft {
    transform: rotate(90deg);
  }
  
  .DatePickerSelector__iconRight {
    transform: rotate(-90deg);
  }

  `;