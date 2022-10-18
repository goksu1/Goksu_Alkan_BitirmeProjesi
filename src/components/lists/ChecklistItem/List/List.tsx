import React, { FC } from "react";
import ListItem from "../ListItem";
import { Styled } from "./List.styled";
import { ListProps } from "./List.types";
import { useKanbanContext } from "../../../../contexts/KanbanContext/KanbanContext";

const List: FC<ListProps> = (props) => {
const { state } = useKanbanContext();
 
  return (
    <Styled>
      {props?.checklists?.find((checklist)=>{
        return checklist.id === state.checklistId
      }).items.map((checklistitem:ChecklistItem) => (
        <ListItem
          dispatches={props.dispatches}
          id={checklistitem.id}
          key={checklistitem.id}
          title={checklistitem.title}
          boardId={state.boardId}
          listId={state.listId}
          checklistId={state.checklistId}
        cardId={state.cardId} isChecked={checklistitem.isChecked}                     />
              
      ))}
      
    </Styled>
  );
};

export default List;
