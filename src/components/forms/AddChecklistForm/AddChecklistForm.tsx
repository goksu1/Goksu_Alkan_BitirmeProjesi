import React, { FC, useState } from "react";
import { checklist } from "../../../services/http/endpoints/checklist";
import { Input, Box } from "../../elements";
import { InputProps } from "../../elements/Input/Input.types";

import { Styled } from "./AddChecklistForm.styled";
import { AddChecklistFormProps } from "./AddChecklistForm.types";

const AddChecklistForm: FC<AddChecklistFormProps> = (props) => {
 
  const [value, setValue] = useState<string>("");
  const handleChange: InputProps["onChange"] = (e, val) => {
    setValue(val);
  };

  const handleAddChecklist = (checklist: any) => {
    props.dispatches.addChecklist(checklist);
  };

  const handleAddClick = () => {
    checklist
      .create({
        title: value,
        cardId: props.cardId,
    
   
      })
      .then(({ data }) => {
        handleAddChecklist(data);
      });
  };

  return (
    <Styled>
      <div style={{ marginTop: "10vh" }}>
        <Box title="Add Checklist">
          <span className="list-span">
          </span>
          <Input
            placeholder="Enter List Name"
            type="text"
            onChange={handleChange}
          />
          <button className="add-button" onClick={handleAddClick}>
            Add
            <span className="material-symbols-outlined">library_add</span>
          </button>
        </Box>
      </div>
    </Styled>
  );
};

export default AddChecklistForm;
