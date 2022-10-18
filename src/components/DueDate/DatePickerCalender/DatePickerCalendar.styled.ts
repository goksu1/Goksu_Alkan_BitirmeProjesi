import styled from "styled-components";
export const Styled = styled.div`

.DatePickerCalendar__row {
    display: flex;
  }
  
  .DatePickerCalendar__header {
    margin-bottom: 8px;
    display: flex;
  }
  
  .DatePickerCalendar__cell {
    padding: 4px;
    width: 38px;
    height: 38px;
    margin: 0 2px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .DatePickerCalendar__dayCell {
    cursor: pointer;
    transition: background-color .2s ease-in-out, color .2s ease-in-out;
  }
  
  .DatePickerCalendar__dayCell:not(.DatePickerCalendar__dayCell_selected):hover {
    background-color: #e9e9e9;
  }
  
  .DatePickerCalendar__dayCell:active {
    background-color: #d1d1d1;
  }
  
  
  .DatePickerCalendar__dayCell_selected {
    background-color: #0036cc;
    color: #fff;
  }
  `;