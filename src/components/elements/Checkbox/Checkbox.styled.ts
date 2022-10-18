import styled from "styled-components";
export const Styled = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  input {
    display: none;
  }
  .checkbox-container {
    width: 1.2rem;
    height: 1.2rem;
    box-sizing: border-box;
    border: 2px solid #515151;
    border-radius: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .label {
    margin-left: 0.5rem;
  }
  .check-icon {
    font-size: 1rem;
  }
`;
