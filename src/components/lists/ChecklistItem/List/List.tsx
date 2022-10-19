import React, { FC } from "react";
import ListItem from "../ListItem";
import { Styled } from "./List.styled";
import { ListProps } from "./List.types";
import { useKanbanContext } from "../../../../contexts/KanbanContext/KanbanContext";

const List: FC<ListProps> = (props) => {
const { state } = useKanbanContext();
 console.log('props', props)
  return (
    <Styled>
      {/* {props?.checklists?.find((checklist)=>{
        return checklist.id === state.checklistId
      }).items.map((checklistitem:ChecklistItem) => ( */}
          {props.checklistItems.map((checklistItem:ChecklistItem) => (
        <ListItem
          dispatches={props.dispatches}
          id={checklistItem.id}
          key={checklistItem.id}
          title={checklistItem.title}
          boardId={state.boardId}
          listId={state.listId}
          checklistId={state.checklistId}
        cardId={state.cardId} isChecked={checklistItem.isChecked}                     />
              
      ))}
      
    </Styled>
  );
};

export default List;
