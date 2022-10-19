import React, { FC, useState } from "react";
import { boardMember } from "../../../../services/http/endpoints/boardMember";
import { Input, Card } from "../../../elements";
import { InputProps } from "../../../elements/Input/Input.types";
import { ListItemProps } from "./ListItem.types";
import { Styled } from "./ListItem.styled";
import { useKanbanContext } from "../../../../contexts/KanbanContext/KanbanContext";
const ListItem: FC<ListItemProps> = (props) => {
  const { setBoardMemberId } = useKanbanContext();

  const handleDeleteBoardMember = () => {
    console.log("handleDeleteList");
    boardMember.destroy(Number(props.id)).then(() => {
      props.dispatches.deleteBoardMember(Number(props.id));
    
    });
  };

  const handleOnClick = () => {
    setBoardMemberId(props.id);
  };
  console.log('props', props)
  return (
    <Styled onClick={handleOnClick}>
    <Card title="Added Member">
      <div className="delete-list">
        <button className="delete-button" onClick={handleDeleteBoardMember}>
          Delete
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
      <div className="list-item">
        <span>{props.username}</span>
      </div>
    </Card>
  </Styled>
  );
};

export default ListItem;
