import React, { FC, useState } from "react";
import {boardMember } from "../../../services/http/endpoints/boardMember";
import { Input} from "../../elements";
import { InputProps } from "../../elements/Input/Input.types";
import { CardContainer } from "../AddCardForm/AddCardForm.styled";
import { AddBoardMemberFormProps } from "./AddBoardMemberForm.types";

const AddBoardMemberForm: FC<AddBoardMemberFormProps> = (props) => {
 
  const [value, setValue] = useState<string>("");
  const handleChange: InputProps["onChange"] = (e, val) => {
    setValue(val);
  };

  const handleAddBoardMember = (boardMember: any) => {
   props.dispatches.addBoardMember(boardMember);
  };

  const handleAddClick = () => {
    boardMember.create({
      username: value,
      boardId: props.boardId,

    }).then(({ data }) => {
      handleAddBoardMember(data);
    });
  };

  return (
    <CardContainer title="Add Member">
          <span className="list-span">
          </span>
          <Input
            placeholder="Enter Member Name"
            type="text"
            onChange={handleChange}
          />
          <button className="add-button" onClick={handleAddClick} data-noredirect="true">
            Add
            <span className="material-symbols-outlined">library_add</span>
          </button>
      </CardContainer>
  );
};

export default AddBoardMemberForm;
