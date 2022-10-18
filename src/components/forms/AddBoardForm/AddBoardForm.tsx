import React, { FC, useState } from "react";

import { board } from "../../../services/http/endpoints/board";
import { Input,Card } from "../../elements";
import { InputProps } from "../../elements/Input/Input.types";
import { Styled } from "./AddBoardForm.styled";
import { AddBoardFormProps } from "./AddBoardForm.types";

const AddBoardForm: FC<AddBoardFormProps> = (props) => {
 
  const [value, setValue] = useState<string>("");

  const handleChange: InputProps["onChange"] = (e, val) => {
    setValue(val);
  };

  const handleAddBoard = (board: any) => {
   props.dispatches.addBoard(board);
  };

  const handleAddClick = () => {
    board.create({
      title: value,
      members: []
    }).then(({ data }) => {
      handleAddBoard(data);
    });
  };

  return (
    <Styled>
      <Card title="AddBoard" onClick={()=>{}}>
      <Input
        placeholder="Enter Board Name"
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

export default AddBoardForm;
