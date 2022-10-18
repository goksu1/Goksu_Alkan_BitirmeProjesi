import React, { FC, useState } from "react";
import {boardMember } from "../../../services/http/endpoints/boardMember";
import { Input,Box } from "../../elements";
import { InputProps } from "../../elements/Input/Input.types";
import { Styled } from "./AddBoardMemberForm.styled";
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
    <Styled>
      <div style={{ marginTop: "10vh" }}>
        <Box title="Add Member">
          <span className="list-span">
          </span>
          <Input
            placeholder="Enter List Name"
            type="text"
            onChange={handleChange}
          />
          <button className="add-button" onClick={handleAddClick} data-noredirect="true">
            Add
            <span className="material-symbols-outlined">library_add</span>
          </button>
        </Box>
      </div>
    </Styled>
  );
};

export default AddBoardMemberForm;
