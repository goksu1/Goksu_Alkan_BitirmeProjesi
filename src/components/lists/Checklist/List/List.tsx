import React, { FC } from "react";
import ListItem from "../ListItem";
import { Styled } from "./List.styled";
import { ListProps } from "./List.types";
import { useKanbanContext } from "../../../../contexts/KanbanContext/KanbanContext";

const List: FC<ListProps> = (props) => {
const { state } = useKanbanContext();
console.log("props", props)
  return (
    <Styled>
      {props.checklists?.map((checklist:Checklist) => (
       
        <ListItem
          dispatches={props.dispatches}
          id={checklist.id}
          key={checklist.id}
          title={checklist.title}
          boardId={state.boardId}
          listId={state.listId}
          checklistId={state.checklistId}
          cardId={state.cardId}                     />
              
      ))}
      
    </Styled>
  );
};

export default List;
