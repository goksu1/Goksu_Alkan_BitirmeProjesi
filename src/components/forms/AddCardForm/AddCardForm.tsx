import React, { FC, useState } from "react";
import { card } from "../../../services/http/endpoints/card";
import { Input } from "../../elements";
import { InputProps } from "../../elements/Input/Input.types";
import { CardContainer } from "./AddCardForm.styled";
import { AddCardFormProps } from "./AddCardForm.types";

const AddCardForm: FC<AddCardFormProps> = (props) => {
  const [value, setValue] = useState<string>("");
  const handleChange: InputProps["onChange"] = (e, val) => {
    setValue(val);
  };

  const handleAddCard = (card: any) => {
    props.dispatches.addCard(card);
  };

  const handleAddClick = () => {
    card
      .create({
        title: value,
        listId: props.listId,
        description:props.description,
      })
      .then(({ data }) => {
        handleAddCard(data);
      });
  };

  return (
    <CardContainer title="Add Card">
      <span className="list-span"></span>
      <Input
        placeholder="Enter Card Name"
        type="text"
        onChange={handleChange}
      />
      <button className="add-button" onClick={handleAddClick}>
        Add
        <span className="material-symbols-outlined">library_add</span>
      </button>
    </CardContainer>
  );
};

export default AddCardForm;
