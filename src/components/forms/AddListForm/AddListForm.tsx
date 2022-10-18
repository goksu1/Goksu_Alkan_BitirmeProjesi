import React, { FC, useState } from "react";
import { useLoginContext } from "../../../contexts/LoginContext/LoginContext";
import { list } from "../../../services/http/endpoints/list";
import { Input, Box } from "../../elements";
import { InputProps } from "../../elements/Input/Input.types";

import { Styled } from "./AddListForm.styled";
import { AddListFormProps } from "./AddListForm.types";

const AddListForm: FC<AddListFormProps> = (props) => {
  const { username } = useLoginContext();
  const [value, setValue] = useState<string>("");
  const handleChange: InputProps["onChange"] = (e, val) => {
    setValue(val);
  };

  const handleAddList = (list: any) => {
    props.dispatches.addList(list);
  };

  const handleAddClick = () => {
    list
      .create({
        title: value,
        boardId: props.boardId,
        order: 0,
       
      })
      .then(({ data }) => {
        handleAddList(data);
      });
  };

  return (
    <Styled>
        <Box title="Add List">
          <span className="list-span">
            {" "}
            {username}; You can create amazing list!
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
    </Styled>
  );
};

export default AddListForm;
