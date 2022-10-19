import React, { FC, useState } from "react";
import { comment } from "../../../../services/http/endpoints/comment";
import { Input, Card, Button } from "../../../elements";
import { InputProps } from "../../../elements/Input/Input.types";
import { ListItemProps } from "./ListItem.types";

import { Styled } from "./ListItem.styled";
import { useKanbanContext } from "../../../../contexts/KanbanContext/KanbanContext";

const ListItem: FC<ListItemProps> = (props) => {
  const { setCommentId } = useKanbanContext();
 
  const handleDeleteComment = () => {
    comment.destroy(Number(props.id)).then(() => {
      props.dispatches.deleteComment(Number(props.id));
    });
  };
  const handleOnClick = () => {
    setCommentId(props.id);
  };
  
  return (
    <Styled onClick={handleOnClick}>
      <Card title="Added Comment">
        <div className="delete-list">
          <button className="delete-button" onClick={handleDeleteComment}>
            Delete
            <span className="material-symbols-outlined">delete</span>
          </button>
        </div>
        <div className="list-item">
          <span>{props.message}</span>
        </div>
      </Card>
    </Styled>
  );
};

export default ListItem;
