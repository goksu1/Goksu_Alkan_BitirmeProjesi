import React, { FC, useState, useEffect } from "react";
import { cardLabel } from "../../../services/http/endpoints/cardLabel";
import { Card } from "../../elements";
import { Styled } from "./AddLabelForm.styled";
import { AddLabelFormProps } from "./AddLabelForm.types";
import Select from "react-select";

const AddLabelForm: FC<AddLabelFormProps> = (props) => {
  const [valueState, setValueState] = useState("")
 
      const handler = (event:any) => {
          const value = event.value
          setValueState(value)
      }

      const handleAddLabel = (label: any) => {
        props.dispatches.addLabel(label);
      };
    
  
  const handleAddClick = () => {
   cardLabel
      .create({
        cardId: props.cardId,
        labelId: props.labelId,
      })
      .then(({ data }) => {
        handleAddLabel(data);
      });
  };
 
  const labelItems = [
    { label: 'High Priority' },
    { label: 'Low Priority' }, ]

  
  return (
    <Styled>
        <Card title="Add Label">
          <span className="list-span"></span>
          <Select onChange={handler}
           options={labelItems}
         />
          <button className="add-button" onClick={handleAddClick}>
            Add
            <span className="material-symbols-outlined">library_add</span>
          </button>
        </Card>

    </Styled>
  );
};

export default AddLabelForm;
