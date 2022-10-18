import React, { FC } from "react";
import ListItem from "../ListItem";
import { Styled } from "./List.styled";
import { ListProps } from "./List.types";
import { useKanbanContext } from "../../../../contexts/KanbanContext/KanbanContext";

const List: FC<ListProps> = (props) => {
const { state } = useKanbanContext();
 
  return (
    <Styled>
      {props.commentdetails.map((comment:CommentDetail) => (
        <ListItem
          dispatches={props.dispatches}
          id={comment.id}
          key={comment.id}
       
          boardId={state.boardId}
          listId={state.listId}
          commentId={state.commentId}
          order={0} cardId={state.cardId} value={undefined}  
          message={comment.message}                 />
              
      ))}
      
    </Styled>
  );
};

export default List;
