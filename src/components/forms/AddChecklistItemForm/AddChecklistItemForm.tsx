import React, { FC, useState } from "react";
import { checklistitem } from "../../../services/http/endpoints/checklistitem";
import { Input, Card } from "../../elements";
import { InputProps } from "../../elements/Input/Input.types";

import { Styled } from "./AddChecklistItemForm.styled";
import { AddChecklistItemFormProps } from "./AddChecklistItemForm.types";

const AddChecklistItemForm: FC<AddChecklistItemFormProps> = (props) => {
 
  const [value, setValue] = useState<string>("");
  const handleChange: InputProps["onChange"] = (e, val) => {
    setValue(val);
  };

  const handleAddChecklistItem = (checklistItem: any) => {
    props.dispatches.addChecklistItem(checklistItem);
  };

  const handleAddClick = () => {
    checklistitem
      .create({
        title: value,
        checklistId: props.checklistId,
        isChecked: false,
      })
      .then(({ data }) => {
        handleAddChecklistItem(data);
      });
  };

  return (
    <Styled>
        <Card title="Add ChecklistItem">
          <span className="list-span">
          </span>
          <Input
            placeholder="Enter Checklist Item Name"
            type="text"
            onChange={handleChange}
          />
          <button className="add-button" onClick={handleAddClick}>
            Add
            <span className="material-symbols-outlined">library_add</span>
          </button>
        </Card>
    </Styled>
  );
};

export default AddChecklistItemForm;
